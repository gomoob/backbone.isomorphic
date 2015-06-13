# Gulp replace


# Backbone

The project uses Backbone Marionette 2.4.1 which depends on Backbone 1.1.2, their is a problem in the UMD module code 
associated to Backbone because it prevents the project to work with jQuery under Node. 

The problem is that by default Backbone is configured to not use jQuery when its loaded in a Node environment. So to 
make it work we have to replace the following in `node_modules/backbone.marionette/node_modules/backbone.js` (line 20) : 

**Note:** This replacement is automatically done by the `npm install` command executing the 
`postinstall/overwrite-backbone.js` file.

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