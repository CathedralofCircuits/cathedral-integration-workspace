#!/usr/bin/env bash
set -euo pipefail

echo "🔧 Auto-install starting…"

if [ -f pnpm-lock.yaml ]; then
  echo "Detected pnpm lock. Using pnpm."
  corepack enable || true
  pnpm install --frozen-lockfile
elif [ -f yarn.lock ]; then
  echo "Detected yarn lock. Using yarn."
  corepack enable || true
  yarn install --frozen-lockfile
else
  echo "Using npm."
  npm ci --ignore-scripts
fi

# Optional workspace bootstrap
if jq -e '.workspaces' package.json >/dev/null 2>&1; then
  echo "Bootstrapping workspaces…"
  npm run -s bootstrap || true
fi

# Husky (if configured)
if jq -e '.scripts.prepare' package.json >/dev/null 2>&1; then
  echo "Installing Husky hooks…"
  npm run -s prepare || true
fi

echo "Running lint fix and typecheck…"
npm run -s lint:fix || true
npm run -s typecheck || true

echo "Building (GitHub Pages base)…"
VITE_BASE=/cathedral/ npm run -s build || true

echo "✅ Auto-install complete."