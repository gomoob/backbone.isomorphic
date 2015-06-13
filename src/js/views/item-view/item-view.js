var Backbone = require('backbone'),
    _ = require('underscore'), 
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
         * Events bound to DOM elements of this view.
         */
        events : {
            'click @ui.counterBtn' : '_onCounterBtnClick'
        },
        
        /**
         * The Underscore template used to generate the HTML fragment attached to this view.
         * 
         * @var {String}
         */
        template : _.template(tpl),
        
        /**
         * Alias to UI elements of this view.
         */
        ui : {
            counter : '#counter',
            counterBtn : '#counter-btn'
        },
        
        /**
         * Function called just after the view is rendered on server side.
         */
        onRenderServerSide : function() {

            console.log('Server side rendering.');

        },

        /**
         * Function called just afer the view is rendered.
         */
        onRender : function() {

            console.log('Client side rendering.');

        },
        
        /**
         * Function called when the user clicks on the counter button.
         * 
         * @param {jQuery.Event} clickEvent The click event which triggered a call to this function.
         */
        _onCounterBtnClick : function(clickEvent) {
            
            var counter = parseInt(this.ui.counter.text());
            this.ui.counter.text(counter + 1);

        },

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TODO: Move those functions into an 'Mn.IsomorphicItemView' class
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        constructor: function() {

            this._serverSide = Mn.serverSide === true;

            Mn.View.apply(this, arguments);
        
        },
        
        _ensureElement: function() {

            Backbone.View.prototype._ensureElement.apply(this, arguments);
            
            this.$el.attr('data-server-side', true);
            
        },

        render: function() {
            
            // Server side rendering is very simple
            if(this._serverSide) {
          
                this._renderTemplate();
                this.isRendered = true;

                this.onRenderServerSide();

            } 
            
            // Standard Marionette ItemView rendering
            else {
            
                Mn.ItemView.prototype.render.apply(this, arguments);

            }

            return this;
        }

    }
);