/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {id: '1', name: 'gloves', description: 'Venom leather', quantity: 10 },
    {id: '2', name: 'water bottle', description: 'UA steel', quantity: 10 },
    {id: '3', name: 'gym bag', description: 'Under Armour', quantity: 10 },
  ]);
};
