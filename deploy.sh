#!/usr/bin/env sh

set -e
git push;
node .bin/changeBase.js /just-react/;

npm run build;

cd dist;
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:songning0605/just-react.git master:gh-pages

cd -

rm -rf dist

node .bin/changeBase.js 