// assuming `db` is a variable holding a database connection with the
// method `.store(key, value)`
// a '__default' key is created by default
 
var sequential = require("sequential-ids");
 
var generator = new sequential.Generator({
  digits: 3,
  restore: "000"
});

generator.start();

module.exports = generator;
 
