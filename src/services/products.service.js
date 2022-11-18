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

  return { type: null, message: { id: insertId, ...produto } };
};

const updateProduct = async (id, product) => {
  const hasProduct = await productsModel.findProductsById(id);

  if (!hasProduct) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await productsModel.updateProduct(id, product);

  const getUpdatedProduct = await productsModel.findProductsById(id);

  return { type: null, message: getUpdatedProduct };
};

const deleteProduct = async (id) => {
  const hasProduct = await productsModel.findProductsById(id);

  if (!hasProduct) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await productsModel.deleteProduct(id);
};

module.exports = {
  findAllProducts,
  findProductsById,
  insertProduct,
  updateProduct,
  deleteProduct,
};