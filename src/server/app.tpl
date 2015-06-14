<!DOCTYPE html>

<html>
    <head>
    
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSS dependencies -->
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css"></link>
        <link rel="stylesheet" href="bower_components/bootstrap-material-design/dist/css/material.css"></link>

    </head>
    <body style="background: white;">
        <div class="container">
        
            <div class="row text-center">
                <h1>backbone.isomorphic</h1>
                <h2>Backbone and Marionette isomorphic Proof Of Concepts</h2>
                <hr/>
            </div>

            <!-- Row where to show a simple Backbone View rendered server side -->
            <div class="row">
	            <div id="backbone-view" class="col-md-12"></div>
	        </div>

            <!-- Row where to show a simple Marionette ItemView rendered server side -->
	        <div class="row">
	            <div id="item-view" class="col-md-12"></div>
	        </div>
	        
	        <!-- Row were to show a simple Marionette LayoutView rendered server side -->
	        <div class="row">
	            <div id="layout-view" class="col-md-12"></div>
	        </div>

        </div>
    </body>
    
    <!-- Application Browserify Bundle -->
    <script type="text/javascript" src="bundle.js"></script>

</html>