/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('items').then (function (exists) {
        if (!exists)  {
            return knex.schema.createTable('items', function(table) {
                table.increments('id').primary();
                table.string('name').notNullable();
                table.string('description');
                table.integer('quantity');
                table.string('username', 50).notNullable();


            });
        }    
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('items');

};
