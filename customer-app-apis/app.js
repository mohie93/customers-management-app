// Load ENV
require('dotenv').config({});

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // for CORS
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const port = process.env.PORT || 5000;

// check server status
app.get('/', (_, res) => res.status(200).json({ message: 'OK', version: require('./package.json').version }));

// routes
app.use('/api/customers', require('./src/routes/customerProfile.route'));

app.listen(port, () => console.log(`customers backend app listening on port ${port}!`));
