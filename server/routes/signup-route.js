const knexConfig = require('../knexfile');

const knex = require('knex')(knexConfig.development);

const express = require('express');
const router = express.Router(); 

router.post('/users/signup', async (req, res) => {
    console.log(req.body); 
    const { username, password } = req.body;
    console.log({ username, password });


    try {
        await knex.transaction(async (trx) => {
        // Check if the username already exists
        const existingUser = await trx('users').where({ username }).first();
        if (existingUser) {
            return res.status(409).json({ message: "Username not available" });
        }
        // Add new user
        await trx('users').insert({ username, password });

        // If the username does not exist, create a new user
        // const newUser = await knex('users').insert({ username, password });
        
        res.json({ message: "Account successfully created" });
      });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

module.exports = router;
