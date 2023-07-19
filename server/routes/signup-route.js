const knexConfig = require('../knexfile');

const knex = require('knex')(knexConfig.development);

const express = require('express');
const router = express.Router(); 

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the username already exists
        const existingUser = await knex('users').where({ username }).first();
        if (existingUser) {
            return res.status(409).json({ message: "Username not available" });
        }
        
        // If the username does not exist, create a new user
        const newUser = await knex('users').insert({ username, password });
        
        res.json({ message: "Account successfully created" });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
