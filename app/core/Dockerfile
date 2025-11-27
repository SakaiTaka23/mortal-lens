FROM mcr.microsoft.com/playwright:v1.57.0-jammy

WORKDIR /app

# Copy root workspace configs
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy all packages (needed for workspace dependencies)
COPY packages ./packages
COPY app ./app
COPY config ./config

# Install dependencies
RUN npm install -g pnpm@10.6.4 && \
    pnpm install

# Set working directory to the core app where playwright is installed
WORKDIR /app/app/core

# Install Playwright browsers matching the installed version
# This ensures the browser version matches the @playwright/test version
RUN pnpm exec playwright install --with-deps chromium

# Storybook runs on port 6006
EXPOSE 6006

CMD ["pnpm", "run", "test:e2e"]
