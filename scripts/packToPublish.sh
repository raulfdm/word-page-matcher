#!/bin/bash

./scripts/build.sh

EXTENSIONS_DIR="$PWD/extensions"
DIST_DIR="$PWD/dist"

# Just make sure we have this folder
mkdir dist

cd $EXTENSIONS_DIR/firefox && zip -r -FS $DIST_DIR/firefox.zip *
cd $EXTENSIONS_DIR/chrome && zip -r -FS $DIST_DIR/chrome.zip *
