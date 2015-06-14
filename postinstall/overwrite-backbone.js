var fs = require('fs')

module.exports = function(path) {
    
    var data = fs.readFileSync(path, 'utf8'), 
        write = false;
    
    // By default 'backbone.js' suppose we do not need jQuery in a Node.js environment. 
    // In our case we absolutly need it with Node because Backbone and Marionette view rendering needs jQuery
    if(data.indexOf("require('jquery');") === -1) {
        
        write = true;
        
        // Require jQuery
        data = data.replace(
            "var _ = require('underscore');\n", 
            "var _ = require('underscore');\n    var $ = require('jquery');\n"
        );
        
        // Add jQuery as a dependency of the backbone UMD module factory method
        data = data.replace(
            "factory(root, exports, _);",
            "factory(root, exports, _, $);"
        );

    }

    if(data.indexOf("Backbone.isomorphic === true;") === -1) {
    
        write = true;
        
        data = data.replace(
            "Backbone.View = function(options) {\n",
            "Backbone.View = function(options) {\n    this.isomorphic = Backbone.isomorphic === true;\n"
        );
        
        data = data.replace(
            "_ensureElement: function() {\n" +
            "      if (!this.el) {\n" +
            "        var attrs = _.extend({}, _.result(this, 'attributes'));\n" +
            "        if (this.id) attrs.id = _.result(this, 'id');\n" +
            "        if (this.className) attrs['class'] = _.result(this, 'className');\n" +
            "        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);\n" +
            "        this.setElement($el, false);\n" +
            "      } else {\n" +
            "        this.setElement(_.result(this, 'el'), false);\n" +
            "      }\n",
            "_ensureElement: function() {\n" +
            "      if (!this.el) {\n" +
            "        var attrs = _.extend({}, _.result(this, 'attributes'));\n" +
            "        if (this.id) attrs.id = _.result(this, 'id');\n" +
            "        if (this.className) attrs['class'] = _.result(this, 'className');\n" +
            "        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);\n" +
            "        this.setElement($el, false);\n" +
            "      } else {\n" +
            "        this.setElement(_.result(this, 'el'), false);\n" +
            "      }\n" +
            "      this.$el.attr('data-isomorphic', true);\n"
        );
        
        data = data.replace(
            "_ensureElement: function() {\n" +
            "        if (!this.el) {\n" +
            "          var attrs = _.extend({}, _.result(this, 'attributes'));\n" +
            "          if (this.id) attrs.id = _.result(this, 'id');\n" +
            "          if (this.className) attrs['class'] = _.result(this, 'className');\n" +
            "          var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);\n" +
            "          this.setElement($el, false);\n" +
            "        } else {\n" +
            "          this.setElement(_.result(this, 'el'), false);\n" +
            "        }\n",
            "_ensureElement: function() {\n" +
            "        if (!this.el) {\n" +
            "          var attrs = _.extend({}, _.result(this, 'attributes'));\n" +
            "          if (this.id) attrs.id = _.result(this, 'id');\n" +
            "          if (this.className) attrs['class'] = _.result(this, 'className');\n" +
            "          var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);\n" +
            "          this.setElement($el, false);\n" +
            "        } else {\n" +
            "          this.setElement(_.result(this, 'el'), false);\n" +
            "        }\n" +
            "        this.$el.attr('data-isomorphic', true);\n"
        );

    }

    if(write) {
    
        fs.writeFileSync(path, data, 'utf8');
    
    }

};