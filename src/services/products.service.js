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

const insertProduct = async (produto) => {
  const { insertId } = await productsModel.insertProduct(produto);
  console.log('aaaaaaaaaaaanncidaca');
  console.log(produto);
  return { type: null, message: { id: insertId, ...produto } };
};

module.exports = {
  findAllProducts,
  findProductsById,
  insertProduct,
};