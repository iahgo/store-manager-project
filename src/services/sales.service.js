const { salesModel } = require('../models/index');

const findAllSales = async () => {
  // consumo da model retorna um array 
  const allProducts = await salesModel.findAllSales();

  return { type: null, message: allProducts };
};

const findSaleById = async (id) => {
  const product = await salesModel.findSaleById(id);
  if (!product.length) {
    return {
      type: 'PRODUCT_NOT_FOUND', message: 'Sale not found',
    };
  }

  return { type: null, message: product };
};

const insertSale = async (sale) => {
  const { insertId } = await salesModel.insertSale(sale);

  return { type: null, message: { id: insertId, ...sale } };
};

module.exports = {
  findAllSales,
  findSaleById,
  insertSale,
};