var _ = require('underscore'), 
    Mn = require('backbone.marionette'), 
    tpl = require('./framework-layout-view.tpl');

module.exports = Mn.LayoutView.extend(
    {
        /**
         * The CSS classes to associate to the root DOM element of this view.
         */
        className : 'jumbotron',
        
        /**
         * The Marionette regions which compose this view.
         */
        regions : {
            //ownerRegion : '#owner-region'  
        },

        /**
         * The underscore template used to generate the HTML fragment attached to this view.
         */
        template : _.template(tpl),
        
        /**
         * Function called just after the view is rendered.
         */
        onRender : function() {
            
//            this.sampleRegion.show(
//                new Mn.ItemView(
//                    {
//                        className : 'well',
//                        template: _.template('<p>I\'m a Marionette view rendered on server side inside a region !</p>')
//                    }
//                )
//            );
            
        }
    }
);