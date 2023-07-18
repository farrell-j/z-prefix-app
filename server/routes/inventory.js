const knexConfig = require('../knexfile');

const knex = require('knex')(knexConfig.development);

const express = require('express');
const router = express.Router(); 

// Setup Route for GET request all inventory items
router.get('/', async (req, res) => {
    const items = await knex.select('*').from('items');
    res.json(items);
});

// Setup Route for GET request an inventory item

router.get('/:id', async (req, res) => {
    const item = await knex('items').where({ id: req.params.id}).first();
    if (!item) return res.status(404).send('Item not found'); 
    res.json(item);
});

module.exports = router;
