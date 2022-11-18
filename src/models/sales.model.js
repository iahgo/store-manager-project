const camelize = require('camelize');

const connection = require('./connection');

const findAllSales = async () => {
  const [sales] = await connection.execute(
    'select sp.sale_id, sp.product_id, sp.quantity, s.date '
    + 'from StoreManager.sales_products AS sp INNER JOIN StoreManager.sales '
    + ' AS s ON sp.sale_id = s.id ORDER BY sale_id, product_id',
  );

  return camelize(sales);
};

const findSaleById = async (id) => {
  const [sales] = await connection.execute(
    'select sp.product_id, sp.quantity, s.date '
    + 'from StoreManager.sales_products AS sp INNER JOIN StoreManager.sales '
    + ' AS s ON sp.sale_id = s.id '
    + 'WHERE sp.sale_id = ? ORDER BY sale_id, product_id', 
    [id],
  );
  return camelize(sales);
};

module.exports = {
  findAllSales,
  findSaleById,
};