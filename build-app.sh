#!/bin/bash
rm -rf .git release-builds
npm run build-win
npm run build-linux
npm run build-mac
cd release-builds
zip -r elock-linux.zip eLock-linux-x64