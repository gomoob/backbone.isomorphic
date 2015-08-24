var Backbone = require('backbone'), 
    Promise = require('promise'),
    db = require('../../db');
    
module.exports = {
    findById : function(id) {
        
        return new Promise(
            function(resolve, reject) {

                db.get(
                    "SELECT * FROM frameworks WHERE rowid = " + id, 
                    function(err, row) {                        
                        
                        if(err)  { 
                        
                            reject(err)
                        
                        } else if (row) { 
                            
                            row.id = row.rowid;
                            delete row.id;

                            resolve(new Backbone.Model(row));
                        
                        }
                        
                        resolve(null);

                    }
                );
            }
        );

    }
};