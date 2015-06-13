> Backbone and Marionette isomorphic Proof Of Concepts

# Sample Setup

Please follow those indications one by one.

## Required tools

Install and setup the following tools : 
 * node.js or io.js
 * gulp
 * bower
 * browserify
 
## Pull node dependencies

Pull node.js dependencies using the following command.

```
npm install
```

## Pull bower dependencies

Pull bower dependencies using the following command.

```
bower update
```

## Produce the client.js file

Enter the following commands to create a `src/js/client.js` file using browserify.

```
gulp inline-templates
browserify tmp/views/item-view/item-view.js tmp/bootstrap.js > src/js/client.js
```

*TODO: Create a gulp watch task to automatically update the file.*

## Start the server

Use the following command to start a test server and go to http://localhost:3000 to see the results. 

```
gulp serve
```

Great Backbone and Marionette views rendered server side ;-) !

# Using isomorphic Backbone / isomorphic Marionette

## The `Backbone.isomorphic` parameter

**TODO**

## Make node.js require work with templates

**TODO**

# How does it work ? 

## Server side DOM rendering

**TODO**

## Library overwrites

backbone.isomorphic provides npm postinstall scripts which overwrites the `backbone.js` and `marionette.js` library 
files. The advantage of this method is that you can continue to use standard Backbone and Marionette in your projects, 
then the required updates to make then work in an isomorphic environment are automatically applied for you.

When you run the `npm install` command some postinstall scripts are automatically executed and the following files are 
dynamically modified : 
 * `node_modules/backbone/backbone.js`
 * `node_modules/backbone.marionette/node_modules/backbone/backbone.js`

The following sections describes the modifications which are applied in those files.

### backbone.js

**TODO**

### marionette.js

**TODO**
