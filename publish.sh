#!/bin/bash
set -e

echo "## Copy pakcage.build.json ##"
cp package.build.json dist/package.json

cd dist

npm publish --access public