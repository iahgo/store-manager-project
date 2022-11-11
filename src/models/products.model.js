const connection = require('./connection');

const findAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products', 
  );
  return products;
};

const findProductsById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id], 
  );
  return product;
};

module.exports = {
  findAllProducts,
  findProductsById,
};