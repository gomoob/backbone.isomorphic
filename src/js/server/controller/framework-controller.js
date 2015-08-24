var express = require('express'), 
    router = express.Router(), 
    
    // Business services
    frameworkService = require('../service/framework-service'),
    
    // Views
    FrameworkLayoutView = require('../../common/views/framework/framework-layout-view');

router.get(
    '/', 
    function(req, res) {
        res.send('frameworks ;-)');
    }
);

router.get(
    '/:id', 
    function(req, res) {
        frameworkService.findById(req.params.id).done(
            function(framework) {
                (new FrameworkLayoutView({el : '#layout-view', model : framework})).render();
                res.send(document.documentElement.outerHTML);
            }
        );
    }
);

module.exports = router;