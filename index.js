const express = require('express');
const products = require('./api/products');

const app = express();

const PORT = process.env.PORT || 5001;

app.use('/api/products', products);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))