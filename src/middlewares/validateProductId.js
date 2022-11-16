// const validateProductId = (req, res, next) => {
//   const sales = req.body;

//   sales.map((sale) => {
//     if (!sale.productId) {
//       return res.status(400).json({ message: '"productId" is required' });
//     }
//     if (sale.porductId <= 0) {
//       return res.status(422).json({ message: '"porductId" must be greater than or equal to 1' });
//     }
//     // return next();
//   });
//   next();
// };

// module.exports = validateProductId;