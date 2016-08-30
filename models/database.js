/*var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://postgres:Thor@odin13@localhost/mydb';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });
*/
var Sequelize = require('sequelize');
//var sequelize = new Sequelize('postgres://postgres:Thor@odin13@localhost/mydb');

var sequelize = new Sequelize('mydb','postgres', 'Thor@odin13', {
  host : 'localhost',
  dialect : 'postgres',
  pool : {
    max : 5,
    min : 0,
    idle : 10000
  }

});


var User = sequelize.define('testtable', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

User.sync().then(function () {
  // Table created
  return User.create({
    firstName: 'ravilla',
    lastName: 'venkata'
  });
});
