var _ = require('underscore'), 
    Mn = require('backbone.marionette'), 
    tpl = require('./item-view.tpl');

module.exports = Mn.ItemView.extend(
    {
        template : _.template(tpl)
    }
);