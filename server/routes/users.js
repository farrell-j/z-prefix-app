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

// Setup Route for user login POST request

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await knex('users').where({ username }).first();
        if (user) {
            if (password === user.password) {
                res.json({ message: "Welcome"});
            } else {
                res.status(401).json({ message: 'Incorrect password' });
            }
        } else {  
            res.status(404).json({ message: 'User not found' });
  
            }
        } catch (error) {
            console.error('Login Error:', error);
            res.status(500).json({ message: 'Server Error' });

        }
    });

module.exports = router;
