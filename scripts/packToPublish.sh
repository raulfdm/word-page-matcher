#!/bin/bash

./scripts/build.sh

EXTENSIONS_DIR="$PWD/extension"
DIST_DIR="$PWD/dist"

# Just make sure we have this folder
mkdir dist

cd $EXTENSIONS_DIR && zip -r -FS $DIST_DIR/extension.zip *

