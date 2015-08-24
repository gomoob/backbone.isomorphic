var fs = require('fs');

require.extensions['.tpl'] = function (module, filename) {
    
    // FIXME: We should use a cache in production here ?
    module.exports = fs.readFileSync(filename, 'utf8');

};

require('./db');
require('./document');

// This has to be done after document creation with Domino or Jsdom because jQuery expects a document to be available to 
// be initialized
global.$ = require('jquery');

// The 'Backbone.isomorphic' parameter allows to indicate that we need server side rendering. This boolean is false in 
// a browser environment.
Backbone = require('backbone');
Backbone.isomorphic = true;

var express = require('express');
var app = express();
app.use('/bundle.js', express.static('../client/bundle.js'));
app.use('/bower_components', express.static('../client/bower_components'));
app.use('/views', express.static('../common/views'));

app.use(require('./controller'));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});