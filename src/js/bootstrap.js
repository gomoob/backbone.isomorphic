var ItemView = require('./views/item-view/item-view');

var itemView = new ItemView(
    { 
        el : '#item-view',
        template : false
    }
);
itemView.render();
