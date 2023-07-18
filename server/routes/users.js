const knexConfig = require('../knexfile');

const knex = require('knex')(knexConfig.development);

const express = require('express');
const router = express.Router(); 

// Setup Route for GET request all inventory users
router.get('/', async (req, res) => {
    const users = await knex.select('*').from('users');
    res.json(users);
});

// Setup Route for GET request an inventory user

router.get('/:id', async (req, res) => {
    const user = await knex('users').where({ id: req.params.id}).first();
    if (!user) return res.status(404).send('user not found'); 
    res.json(user);
});

module.exports = router;
