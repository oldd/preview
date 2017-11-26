# add, commit recent changes
git add .
git commit -m 'building'
git checkout master
# enter gitbook source
cd book_source
# build new gitbook
gitbook build
# copy it out of the way for branch change
# f to overwirte last publication
cp -rf ./_book/. ../docs/ 
# return to parent directory
cd ..
# commit recent build
git add .
git commit -m 'building'



# http://www.thegeekstuff.com/2010/06/chmod-command-examples/