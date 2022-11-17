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

const insertProduct = async (produto) => {
  const [product] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [produto.name],
  );
  return product;
};

const updateProduct = async (id, { name }) => {
  console.log(name);
  console.log(id);
  const product = connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );  
  return product;
};

const deleteProduct = async (id) => {
  const product = connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return product;
};

module.exports = {
  findAllProducts,
  findProductsById,
  insertProduct,
  updateProduct,
  deleteProduct,
};