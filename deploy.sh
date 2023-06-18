set -e

npm run build

cd dist

echo > .nojekyll

git checkout -B master
git add -A
git commit -m 'Deploy'
git push -f git@github.com:AMV1909/Rick-And-Morty-TypeScript.git master:Deploy

cd -