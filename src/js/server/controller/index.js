var express = require('express'), 
    router = express.Router();

router.use('/frameworks', require('./framework-controller'))

router.get(
    '/', 
    function (req, res) {

        var BackboneView = require('../../common/views/backbone-view/backbone-view');
        var ItemView = require('../../common/views/item-view/item-view');
        var LayoutView = require('../../common/views/layout-view/layout-view');
        
        // Test with a simple Backbone.View
        var backboneView = new BackboneView({ el : '#backbone-view' });
        backboneView.render();
        
        var frameworkService = require('../service/framework-service');
        frameworkService.findById(1).done(function(framework) {
            
            // Test with a simple Marionette.ItemView
            var itemView = new ItemView(
                {
                    el : '#item-view',
                    model : framework
                }
            );
            itemView.render();
            
            // Test with a simple Marionette.LayoutView
            var layoutView = new LayoutView({ el : '#layout-view' });
            layoutView.render();
            
            res.send(document.documentElement.outerHTML);

        });

    }
);

module.exports = router;