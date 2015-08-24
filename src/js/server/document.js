// Uncomment this if you want to use domino
var domino = require('domino');
global.window = domino.createWindow(require('./app.tpl'));
global.document = window.document;

// Uncomment this if you want to use jsdom
// var jsdom = require('jsdom').jsdom;
// global.document = jsdom(require('./app.tpl'), {});
// global.window = document.defaultView;

module.exports = global.document;