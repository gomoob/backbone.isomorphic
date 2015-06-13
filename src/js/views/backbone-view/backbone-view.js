var Backbone = require('backbone'), 
    _ = require('underscore'), 
    tpl = require('./backbone-view.tpl');

module.exports = Backbone.View.extend(
    {
        render : function() {
            
            this.$el.html(tpl);

        }
    }
);