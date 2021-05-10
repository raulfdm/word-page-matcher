#!/bin/bash

./scripts/build.sh

mkdir dist

zip -r dist/extension.zip chrome-extension/