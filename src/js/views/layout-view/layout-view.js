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
            
            this.sampleRegion.show(new Mn.ItemView({
                template: _.template('Hello !')
            }));
            
        }
    }
);