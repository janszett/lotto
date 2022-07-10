const postcssCustomMedia = require('postcss-custom-media');

postcssCustomMedia({
    importFrom: 'path/to/file.css' // => @custom-selector --small-viewport (max-width: 30em);
  });