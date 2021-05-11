#!/bin/bash

EXTENSION_DIST_PATH=extension/build
MAIN_BUILD_PATH=public/build


# Clean up
rm -R public/build
rm -R $EXTENSION_DIST_PATH

# Build
yarn rollup -c

# Move resoureces
cp -R $MAIN_BUILD_PATH $EXTENSION_DIST_PATH