#!/bin/bash

# Install Angular CLI globally
npm install -g @angular/cli

# Install project dependencies
pnpm install

# Optional: check test runner availability
pnpm exec vitest --version
