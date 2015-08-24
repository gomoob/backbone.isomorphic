var _ = require('underscore'), 
    Mn = require('backbone.marionette'), 
    tpl = require('./layout-view.tpl');

module.exports = Mn.LayoutView.extend(
    {
        regions : {
            sampleRegion : '#sample-region'  
        },

        template : _.template(tpl),
        
        onRender : function() {
            
            this.sampleRegion.show(
                new Mn.ItemView(
                    {
                        className : 'well',
                        template: _.template('<p>I\'m a Marionette view rendered on server side inside a region !</p>')
                    }
                )
            );
            
        }
    }
);