/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("bicicleta", (table) => {
    table.integer("id");
    table.string("color", 255).notNullable();
    table.string("modelo", 255).notNullable();
    table.float("lat");
    table.float("lon");
  });
};

/**
 * @param { import("knex").Knex } kneb
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("bicicleta");
};
