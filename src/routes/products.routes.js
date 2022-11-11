const express = require('express');
const { productsController } = require('../controllers/index');

const route = express.Router();

route.get('/products', productsController.findAllProducts);
route.get('/products/:id', productsController.findProductById);

module.exports = route;
