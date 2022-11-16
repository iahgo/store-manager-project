const express = require('express');
const { productsController } = require('../controllers/index');
const validateName = require('../middlewares/validateName');

const route = express.Router();

route.get('/products', productsController.findAllProducts);
route.get('/products/:id', productsController.findProductById);
route.post('/products', validateName, productsController.insertProduct);

module.exports = route;
