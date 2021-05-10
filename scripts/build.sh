#!/bin/bash

EXTENSION_PATH=extensions
MAIN_BUILD_PATH=public/build
CHROME_DIST_PATH=$EXTENSION_PATH/chrome/build
FIREFOX_DIST_PATH=$EXTENSION_PATH/firefox/build

# Clean up
rm -R public/build
rm -R $CHROME_DIST_PATH $FIREFOX_DIST_PATH

# Build
yarn rollup -c

# Move resoureces
cp -R $MAIN_BUILD_PATH $CHROME_DIST_PATH
cp -R $MAIN_BUILD_PATH $FIREFOX_DIST_PATH