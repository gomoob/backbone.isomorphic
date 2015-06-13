var fs = require('fs')

var overwriteBackbone = function(path) {
    
    var data = fs.readFileSync(path, 'utf8'); 
    
    if(data.indexOf("require('jquery');") === -1) {
        
        var result = data.replace(
            "var _ = require('underscore');\n", 
            "var _ = require('underscore');\n    var $ = require('jquery');\n"
        );
        
        result = result.replace(
            "factory(root, exports, _);",
            "factory(root, exports, _, $);"
        );
    
        fs.writeFileSync(path, result, 'utf8');

    }
    
};

overwriteBackbone('node_modules/backbone/backbone.js');
overwriteBackbone('node_modules/backbone.marionette/node_modules/backbone/backbone.js');
