#!/usr/bin/env bash
#
# Build and restart the site on the VPS.
#
#   cd /var/www/celiscollege.lk && ./deploy/deploy.sh
#
# Run it after pulling changes, or after editing anything in src/content/.
set -euo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SERVICE="celiscollege"

cd "$APP_DIR"

echo "==> Installing dependencies"
npm ci --omit=dev --no-audit --no-fund || npm install --no-audit --no-fund

echo "==> Building"
npm run build

# `output: "standalone"` emits a minimal server, but static assets and /public
# are not copied into it automatically - so do that here.
echo "==> Assembling standalone bundle"
cp -r public .next/standalone/public
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/static

# Enquiry submissions are appended here; keep it writable by the service user.
mkdir -p data
chown -R www-data:www-data "$APP_DIR/data" 2>/dev/null || true

echo "==> Restarting $SERVICE"
sudo systemctl restart "$SERVICE"
sleep 2
sudo systemctl --no-pager --lines=10 status "$SERVICE"

echo "==> Done. https://celiscollege.lk"
