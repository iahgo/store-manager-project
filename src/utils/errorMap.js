const errorType = {
  PRODUCT_NOT_FOUND: 404,
};

const errorMap = (type) => errorType[type] || 500;

module.exports = errorMap;