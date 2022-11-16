const { salesService } = require('../services/index');

const errorMap = require('../utils/errorMap');

const findAllSales = async (_req, res) => {
  const allProducts = await salesService.findAllSales();
  res.status(200).json(allProducts.message);
};

const findSaleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findSaleById(id);
  if (type) return res.status(errorMap(type)).json({ message });

  res.status(200).json((message));
};

const insertSale = async (req, res) => {
  const { message } = await salesService.insertSale(req.body);
  res.status(201).json(message);
};

module.exports = {
  findAllSales,
  findSaleById,
  insertSale,
};
