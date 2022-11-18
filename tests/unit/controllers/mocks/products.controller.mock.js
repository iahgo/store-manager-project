const products = [
  {
    id: 1,
    name: 'Martelo do Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];


const allProductsReturn = { type: null, message: products };

const productReturn = { type: null, message: products[0] };

module.exports = {
  allProductsReturn, 
  products,
}