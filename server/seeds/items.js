/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {item_name: 'Item 1', description: 'Description 1', quantity: 10 },
    { item_name: 'Item 2', description: 'Description 2', quantity: 5 },
    { item_name: 'Item 3', description: 'Description 3', quantity: 0 },
  ]);
};
