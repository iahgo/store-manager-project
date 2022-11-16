// const validateQuantity = (req, res, next) => {
//   const sales = req.body;

//   sales.map((sale) => {
//     if (!sale.quantity) {
//       return res.status(400).json({ message: '"quantity" is required' });
//     }
//     if (sale.quantity <= 0) {
//       return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
//     }
//     // return next();
//   });
//   next();
// };

// module.exports = validateQuantity;