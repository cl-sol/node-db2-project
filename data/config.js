//imports
const knex = require("knex");
const knexfile = require("../knexfile");

//initiates connection to database so we can import to other files
module.exports = knex(knexfile);