#!/usr/bin/env bash
#
# Build and restart the site on the VPS.
#
#   cd /var/www/celiscollege.lk && ./deploy/deploy.sh
#
# Run it after pulling changes, or after editing anything in src/content/.
set -euo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP="celiscollege"
PORT=3002

cd "$APP_DIR"

# devDependencies are required to BUILD: next.config.ts is TypeScript, so the
# build needs `typescript` and the @types packages. `--omit=dev` here makes the
# build fail with "Cannot find module 'typescript'". The standalone bundle that
# gets deployed contains only traced production dependencies either way, so
# installing dev dependencies costs nothing at runtime.
echo "==> Installing dependencies"
npm ci --no-audit --no-fund || npm install --no-audit --no-fund

echo "==> Building"
npm run build

# `output: "standalone"` emits a minimal server, but static assets and /public
# are not copied into it automatically - so do that here.
echo "==> Assembling standalone bundle"
cp -r public .next/standalone/public
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/static

# server.js chdirs to its own directory, so the app writes enquiries to
# .next/standalone/data - which the build above wipes. Point it at a directory
# that survives deploys.
echo "==> Linking the persistent data directory"
mkdir -p data
rm -rf .next/standalone/data
ln -sfn "$APP_DIR/data" .next/standalone/data

echo "==> Restarting $APP"
cd "$APP_DIR/.next/standalone"
if pm2 describe "$APP" >/dev/null 2>&1; then
    PORT=$PORT HOSTNAME=127.0.0.1 NODE_ENV=production pm2 restart "$APP" --update-env
else
    PORT=$PORT HOSTNAME=127.0.0.1 NODE_ENV=production pm2 start server.js --name "$APP"
fi
pm2 save
sleep 2
pm2 describe "$APP" | head -20

echo "==> Done. https://celiscollege.lk"
