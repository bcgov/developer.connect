# sbc-apigw

## Development & Contributing

Create a fork and local copy of this repo. Answer _Y_ to create a local clone.
```bash
gh repo fork bcgov/sbc-apigw
```

Change into the directory and install the packages.
```bash
cd sbc-apigw
pnpm install
```

Startup the development environment.
```bash
pnpm run dev
```

## Testing

Run Vitest in watch mode for unit tests
```bash
pnpm test
or
pnpm test:unit
```

Run Playwright e2e tests in headless mode
```bash
cd sbc-apigw
pnpm test:e2e
```

Run Playwright e2e tests in Playwright UI
```bash
pnpm run dev
pnpm test:e2e:ui
```