var fs = require('fs'),
    SQLite3 = require('sqlite3').verbose(),
    db = new SQLite3.Database(':memory:');

db.serialize(function() {
    
    db.run('CREATE TABLE frameworks (name TEXT, description TEXT, version TEXT, stars INTEGER)');

    // Insert frameworks
     var statement = db.prepare("INSERT INTO frameworks VALUES (?, ?, ?, ?)");

     JSON.parse(fs.readFileSync('../../data/frameworks.json')).forEach(function(framework) {
         statement.run(framework.name, framework.description, framework.version, framework.stars);
     });
  
     statement.finalize();

});


module.exports = db;