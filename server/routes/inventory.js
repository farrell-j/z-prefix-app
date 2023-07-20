const express = require('express');
const router = express.Router();
const knex = require('knex'); // Import knex before using it
const config = require('../knexfile.js');

const db = knex(config.development);

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

router.post('/', async (req, res) => {
    const { name, description, quantity } = req.body; 

    try {
        const newItem = await db('items').insert({ name, description, quantity });

        res.json({ message: "Item Created", item: newItem });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});


module.exports = router;
