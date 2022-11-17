const { productsService } = require('../services/index');

const errorMap = require('../utils/errorMap');

const findAllProducts = async (_req, res) => {
  const allProducts = await productsService.findAllProducts();
  res.status(200).json(allProducts.message);
};

const findProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findProductsById(id);
  if (type) return res.status(errorMap(type)).json({ message });
  
  res.status(200).json((message));
};

const insertProduct = async (req, res) => {
  const { message } = await productsService.insertProduct(req.body);
  res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const product = req.body;
  const { id } = req.params;

  const { type, message } = await productsService.updateProduct(id, product);
  
  if (type) return res.status(errorMap(type)).json({ message });

  res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productsService.findProductsById(id);

  if (type) return res.status(errorMap(type)).json({ message });

  await productsService.deleteProduct(id);

  res.status(204).json({});
};

module.exports = {
  findAllProducts,
  findProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};
