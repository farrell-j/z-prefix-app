const express = require('express');
const app = express();
const port = 3001;
const knex = require('knex');
const cors = require('cors');
const config = require('./knexfile.js');
const bodyParser = require('body-parser'); 
const inventoryRoutes = require('./routes/inventory');

const db = knex(config.development);

app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); 
app.use('/inventory', inventoryRoutes); 

app.get('/inventory', async (req, res) => {
    try {
        const inventory = await db.select('*').from('items');
        res.json(inventory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
    });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});