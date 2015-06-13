var fs = require('fs');

require.extensions['.tpl'] = function (module, filename) {
    
    // FIXME: We should use a cache in production here ?
    module.exports = fs.readFileSync(filename, 'utf8');

};


// Uncomment this if you want to use domino
var domino = require('domino');
global.window = domino.createWindow(
    '<div id="backbone-view"></div>' +
    '<div id="item-view"></div>' + 
    '<div id="layout-view"></div>'
);
global.document = window.document;

// Uncomment this if you want to use jsdom
// var jsdom = require('jsdom').jsdom;
// global.document = jsdom('<div id="backbone-view"></div>', {});
// global.window = document.defaultView;

// This has to be done after document creation with Domino because jQuery expects a document to be available to be 
// initialized
global.$ = require('jquery');

var express = require('express');
var app = express();

app.get(
    '/', 
    function (req, res) {

        var BackboneView = require('./views/backbone-view/backbone-view');
        var ItemView = require('./views/item-view/item-view');
        var LayoutView = require('./views/layout-view/layout-view');
        
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