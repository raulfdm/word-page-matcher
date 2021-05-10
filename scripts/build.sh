#!/bin/bash

# Clean up
rm -R public/build
rm -R chrome-extension/build

# Build
yarn rollup -c

# Move resoureces
cp -R public/build chrome-extension