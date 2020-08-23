
exports.up = function(knex) {
  knex.schema.createTable("cars", (table) => {
    //table.integer("id").notNull().unique().primary() (same as line 5)
    table.increments("id");
    table.integer("vin").notNull().unique();
    table.text("make").notNull();
    table.text("model").notNull();
    table.integer("mileage").notNull();
    table.text("transmission");
    table.text("titleStatus");
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("cars");
};
