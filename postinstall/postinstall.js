var fs = require('fs-extra'),
    overwriteBackbone = require('./overwrite-backbone'), 
    overwriteMarionette = require('./overwrite-marionette');

overwriteBackbone('node_modules/backbone/backbone.js');
// overwriteBackbone('node_modules/backbone.marionette/node_modules/backbone/backbone.js');

overwriteMarionette('node_modules/backbone.marionette/lib/backbone.marionette.js');

fs.copySync('postinstall/gulp-replace.js', 'node_modules/gulp-replace/index.js');