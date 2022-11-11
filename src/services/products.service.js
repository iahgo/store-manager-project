const { productsModel } = require('../models/index');

const findAllProducts = async () => {
  // consumo da model retorna um array 
  const allProducts = await productsModel.findAllProducts();

  return { type: null, message: allProducts };
};

const findProductsById = async (id) => {
  const product = await productsModel.findProductsById(id);

  if (!product) {
    return {
      type: 'PRODUCT_NOT_FOUND', message: 'Product not found',
    };
  }

  return { type: null, message: product };
};

module.exports = {
  findAllProducts,
  findProductsById,
};