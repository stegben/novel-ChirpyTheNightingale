git branch -D gh-pages
git checkout -b gh-pages
rm -rf public
npm run build
git add -f public
git commit -m "publish"
git push -f origin gh-pages
git checkout master
