var Backbone = require('backbone'), 
    _ = require('underscore');

module.exports = Backbone.View.extend(
    {
        render : function() {
            
            this.$el.html('<p>I am a simple Backbone view.</p>');

        }
    }
);