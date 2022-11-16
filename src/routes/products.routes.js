const express = require('express');
const { productsController, salesController } = require('../controllers/index');
const validateName = require('../middlewares/validateName');
// const validateProductId = require('../middlewares/validateProductId');
// const validateQuantity = require('../middlewares/validateQuantity');

const route = express.Router();

route.get('/products', productsController.findAllProducts);
route.get('/products/:id', productsController.findProductById);
route.post('/products', validateName, productsController.insertProduct);

route.get('/sales', salesController.findAllSales);
route.get('/sales/:id', salesController.findSaleById);
route.post('/sales', salesController.insertSale);

module.exports = route;
