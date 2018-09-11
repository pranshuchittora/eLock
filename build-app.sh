#!/bin/bash
rm -rf .git release-builds
npm run build-win
npm run build-linux
npm run build-mac