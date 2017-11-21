var ghpages = require('gh-pages');

ghpages.publish('book_source', function(err) {console.log(err)});