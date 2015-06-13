> Backbone and Marionette isomorphic Proof Of Concepts

# Setup

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
