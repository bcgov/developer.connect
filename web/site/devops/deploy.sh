#!/bin/bash
# Cloud Run SSR Deployment Script
# Usage: ./web/site/devops/deploy.sh [environment] [region]
# Example: ./web/site/devops/deploy.sh production us-central1

set -e

ENVIRONMENT=dev
REGION=northamerica-northeast1
APP_NAME="site"
PROJECT_ID="gtksf3-dev"
ARTIFACT_REGISTRY="northamerica-northeast1-docker.pkg.dev/c4hnrd-tools/cloud-run-repo"

if [ -z "$PROJECT_ID" ]; then
  echo "Error: No GCP project configured. Run 'gcloud config set project PROJECT_ID'"
  exit 1
fi

echo "🚀 Deploying Nuxt SSR to Cloud Run"
echo "   Project: $PROJECT_ID"
echo "   Region: $REGION"
echo "   Environment: $ENVIRONMENT"
echo "   Artifact Registry: $ARTIFACT_REGISTRY"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Step 0: Build the app in place
echo -e "${BLUE}🔨 Installing dependencies...${NC}"
cd web/$APP_NAME
pnpm install
echo -e "${BLUE}🔨 Building Nuxt app...${NC}"
pnpm build
cd ../../

# Step 1: Build Docker image
echo -e "${BLUE}📦 Building Docker image from monorepo root...${NC}"
docker build \
  --build-arg APP_NAME=$APP_NAME \
  -t developer-connect-ssr \
  -f web/$APP_NAME/Dockerfile \
  .

echo -e "${GREEN}✓ Build complete${NC}"

# Step 2: Tag for Artifact Registry
echo -e "${BLUE}🏷️ Tagging image...${NC}"
docker tag developer-connect-ssr $ARTIFACT_REGISTRY/developer-connect-ssr:latest
docker tag developer-connect-ssr $ARTIFACT_REGISTRY/developer-connect-ssr:$(date +%Y%m%d-%H%M%S)

# Step 3: Optional local test
read -p "Run local container test? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo -e "${BLUE}🧪 Testing container...${NC}"
  docker run -d \
    -p 8080:8080 \
    -e NODE_ENV=$ENVIRONMENT \
    --name test-container \
    developer-connect-ssr
  
  sleep 5
  
  if curl -f http://localhost:8080/en-CA > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Health check passed${NC}"
  else
    echo -e "${YELLOW}✗ Health check failed${NC}"
  fi
  
  docker stop test-container && docker rm test-container
fi

# Step 4: Configure Docker for Artifact Registry
echo -e "${BLUE}🔐 Configuring Docker authentication...${NC}"
gcloud auth configure-docker northamerica-northeast1-docker.pkg.dev

# Step 5: Push to Artifact Registry
echo -e "${BLUE}📤 Pushing to Artifact Registry...${NC}"
docker push $ARTIFACT_REGISTRY/developer-connect-ssr:latest

echo -e "${GREEN}✓ Push complete${NC}"

# Step 6: Deploy to Cloud Run with environment variables
echo -e "${BLUE}🌐 Deploying to Cloud Run...${NC}"

# Load environment variables from .env file and pass to Cloud Run
ENV_VARS="NODE_ENV=$ENVIRONMENT"
if [ -f "web/$APP_NAME/.env" ]; then
  ENV_FILE_VARS=$(cat web/$APP_NAME/.env | \
    grep -v '^#' | \
    grep -v '^\s*$' | \
    sed 's/ *= */=/' | \
    tr -d '"' | \
    grep -v '=$' | \
    paste -sd, -)
  if [ -n "$ENV_FILE_VARS" ]; then
    ENV_VARS="$ENV_VARS,$ENV_FILE_VARS"
  fi
fi

gcloud run deploy developer-connect-ssr \
  --image=$ARTIFACT_REGISTRY/developer-connect-ssr:latest \
  --region=$REGION \
  --project=$PROJECT_ID \
  --allow-unauthenticated \
  --memory=1024Mi \
  --cpu=2 \
  --timeout=300 \
  --set-env-vars "$ENV_VARS"

echo -e "${GREEN}✓ Cloud Run deployment complete${NC}"

echo ""
echo -e "${GREEN}✨ Deployment complete!${NC}"
echo ""
echo "🔗 Service URL:"
sleep 2  # Wait for service to be fully available
gcloud run services describe developer-connect-ssr --region $REGION --project=$PROJECT_ID --format='value(status.url)'
echo ""
echo "📊 View logs:"
echo "   gcloud run logs read developer-connect-ssr --region $REGION --project=$PROJECT_ID --limit 50"
echo ""
