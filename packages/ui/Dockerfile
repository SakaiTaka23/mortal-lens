FROM mcr.microsoft.com/playwright:v1.56.1-jammy

WORKDIR /app

# Copy root workspace configs
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy all packages (needed for workspace dependencies)
COPY packages ./packages
COPY app ./app
COPY config ./config

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install

# Set working directory to the UI package where playwright is installed
WORKDIR /app/packages/ui

# Install Playwright browsers matching the installed version
# This fixes the mismatch between package.json version and base image version
RUN pnpm exec playwright install --with-deps chromium

# Vitest browser mode uses a server
EXPOSE 5173

CMD ["pnpm", "run", "test"]
