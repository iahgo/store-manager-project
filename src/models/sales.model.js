const connection = require('./connection');

const findAllSales = async () => {
  const [sales] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );
  return sales;
};

const findSaleById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?', [id], 
  );
  return product;
};

const insertSale = async () => {
  const [product] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (default)',
    [],
  );
  return product;
};

module.exports = {
  findAllSales,
  findSaleById,
  insertSale,
};