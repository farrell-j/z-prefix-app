/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {id: 1, first_name: 'Connor', last_name: 'McGregor', username: 'Notorious', password: 'doublechamp'},
    {id: 2, first_name: 'Amanda', last_name: 'Nunes', username: 'Lioness', password: 'knockout'},
    {id: 3, first_name: 'Nate', last_name: 'Diaz', username: 'StocktonSlugger', password: 'slap'},
    {id: 4, first_name: 'Sean', last_name: 'Strickland', username: 'Tarzan', password: 'wild'},

  ]);
};
