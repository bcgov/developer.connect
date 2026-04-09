# Reusable Dockerfile for Nuxt SSR applications
# Build from monorepo root: docker build -f web/site/Dockerfile -t developer-connect-ssr .
# Or with build arg: docker build -f web/site/Dockerfile --build-arg APP_NAME=site -t developer-connect-ssr .

# Build stage
FROM node:24-slim AS builder

ARG APP_NAME=site
ENV APP_NAME=${APP_NAME}
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@10.10.0 --activate
RUN apt-get update && apt-get install -y curl git && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy only package files first for better Docker caching
COPY web/${APP_NAME}/package.json web/${APP_NAME}/pnpm-lock.yaml ./

# Install dependencies with reduced network concurrency to avoid hangs
RUN pnpm install --frozen-lockfile --network-concurrency 1

# Then copy the rest of the app code
COPY web/${APP_NAME} ./

# Build the app
RUN pnpm build

# Production stage
FROM node:24-slim AS production

ARG APP_NAME=site
ENV NODE_ENV=production
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

# Copy built output from builder
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules ./node_modules

# Cloud Run uses PORT env variable (default 8080)
ENV PORT=8080

# Enable verbose logging for Cloud Run
ENV NITRO_LOG_LEVEL=4

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8080/en-CA', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

EXPOSE 8080

# Start the Nuxt server with source maps enabled for better error logging in Cloud Run
CMD ["node", "--enable-source-maps", ".output/server/index.mjs"]
