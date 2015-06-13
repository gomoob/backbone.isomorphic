> Marionette isomorphinc Proof Of Concepts

# Setup

Please follow the following indications one by one.

## Required tools

Install and setup the following tools : 
 * node.js or io.js
 * gulp
 
## Pull node dependencies

Pull node.js dependencies using the following command.

```
npm install
```

## Backbone

The project used Backbone Marionette 2.4.1 which depends on Backbone 1.1.2, their is a problem in the UMD module code 
associated to Backbone which prevents the project to work. 

The problem is that by default Backbone is configured to not use jQuery when its loaded in a Node environment. So to 
make it work we have to replace the following in `node_modules/backbone.marionette/node_modules/backbone.js` (line 20) : 

```javascript
var _ = require('underscore');
factory(root, exports, _);
```

By this : 

```javascript
var _ = require('underscore');
var $ = require('jquery');
factory(root, exports, _, $);
```

## Start the server

Use the following command to start a test server and go to http://localhost:3000 to see the results. 

```
gulp serve
```

Great Backbone and Marionette views rendered server side ;-) !