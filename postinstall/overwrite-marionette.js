var fs = require('fs')

var overwriteMarionette = function(path) {
    
    var data = fs.readFileSync(path, 'utf8'), 
        write = false;

    if(data.indexOf("this.isomorphic === true;") === -1) {

        write = true;
        
        data = data.replace(
            "    render: function() {\n" +
            "      this._ensureViewIsIntact();\n", 
            "    render: function() {\n\n" +
            "      if(this.isomorphic) {\n" + 
            "        this._renderTemplate();\n" +
            "        if(_.isFunction(this.onRenderServerSide)) {\n" + 
            "          this.onRenderServerSide();\n" +
            "        }\n" +
            "        return this;\n" + 
            "      }\n\n" +
            "      this._ensureViewIsIntact();\n"
        );

    }

    if(write) {
    
        fs.writeFileSync(path, data, 'utf8');
    
    }

};

overwriteMarionette('node_modules/backbone.marionette/lib/backbone.marionette.js');
