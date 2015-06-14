# backbone.isomorphic

> Isomorphic Backbone and Marionette

## Quick start

Install and setup the following tools : 
 * [node.js](https://nodejs.org "node.js") or [io.js](https://iojs.org "io.js")
 * [Gulp](http://gulpjs.com "gulp.js")

Run the following commands to initialize the project.
```
npm install
gulp init
```

Then run `gulp serve` and open [http://localhost:3000](http://localhost:3000 "demo") in your browser, you'll see a 
Backbone and Marionette isomorphic application demo ;-)

## Using isomorphic Backbone / Marionette

### The `Backbone.isomorphic` parameter

**TODO**

### Make node.js require work with templates

**TODO**

## How does it work ? 

### Server side DOM rendering

**TODO**

### Library overwrites

backbone.isomorphic provides npm postinstall scripts which overwrites the `backbone.js` and `marionette.js` library 
files. The advantage of this method is that you can continue to use standard Backbone and Marionette in your projects, 
then the required updates to make then work in an isomorphic environment are automatically applied for you.

When you run the `npm install` command some postinstall scripts are automatically executed and the following files are 
dynamically modified : 
 * `node_modules/backbone/backbone.js`
 * `node_modules/backbone.marionette/node_modules/backbone/backbone.js`

The following sections describes the modifications which are applied in those files.

#### backbone.js

**TODO**

#### marionette.js

**TODO**


## Gulp tasks

### Pull bower dependencies

Pull bower dependencies using the following command.

```
bower update
```

### Creates bundle.js file

The project uses Browserify to create a bundled application javascript file in `src/client/bundle.js`.

```
gulp browserify
```

### Start the server

Use the following command to start a test server and go to http://localhost:3000 to see the results. 

```
gulp serve
```

Great Backbone and Marionette views rendered server side ;-) !