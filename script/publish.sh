git checkout gh-pages
npm run build
git add -f public
git commit -m "publish"
git push origin gh-pages
git checkout master
