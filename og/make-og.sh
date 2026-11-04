#!/bin/bash
# Regenerates og-image.png (the link-preview card) from og/og.html.
# The date on the card is read from config.js, so: edit config.js, run this,
# commit og-image.png along with config.js. Needs Google Chrome and internet
# (the card loads the same Google Fonts as the site).
set -e
cd "$(dirname "$0")/.."

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ ! -x "$CHROME" ]; then
  echo "Google Chrome not found at: $CHROME" >&2
  exit 1
fi

"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1200,630 \
  --virtual-time-budget=10000 \
  --screenshot="$PWD/og-image.png" "file://$PWD/og/og.html" >/dev/null 2>&1

sips -g pixelWidth -g pixelHeight og-image.png
