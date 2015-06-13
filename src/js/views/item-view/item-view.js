var _ = require('underscore'), 
    Mn = require('backbone.marionette'), 
    tpl = require('./item-view.tpl');

/**
 * Sample Marionette ItemView rendered on the server side and bound on client side after.
 * 
 * @author Baptiste GAILLARD (baptiste.gaillard@gomoob.com)
 */
module.exports = Mn.ItemView.extend(
    {
        /**
         * The Underscore template used to generate the HTML fragment attached to this view.
         * 
         * @var {String}
         */
        template : _.template(tpl)
    }
);