var fs = require('fs');

require.extensions['.tpl'] = function (module, filename) {
    
    // FIXME: We should use a cache in production here ?
    module.exports = fs.readFileSync(filename, 'utf8');

};


// Uncomment this if you want to use domino
var domino = require('domino');
global.window = domino.createWindow(require('./app.tpl'));
global.document = window.document;

// Uncomment this if you want to use jsdom
// var jsdom = require('jsdom').jsdom;
// global.document = jsdom(require('./app.tpl'), {});
// global.window = document.defaultView;

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

app.get(
    '/', 
    function (req, res) {

        var BackboneView = require('../common/views/backbone-view/backbone-view');
        var ItemView = require('../common/views/item-view/item-view');
        var LayoutView = require('../common/views/layout-view/layout-view');
        
        // Test with a simple Backbone.View
        var backboneView = new BackboneView({ el : '#backbone-view' });
        backboneView.render();
        
        // Test with a simple Marionette.ItemView
        var itemView = new ItemView({ el : '#item-view' });
        itemView.render();
        
        // Test with a simple Marionette.LayoutView
        var layoutView = new LayoutView({ el : '#layout-view' });
        layoutView.render();

        res.send(document.documentElement.outerHTML);

    }
);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});