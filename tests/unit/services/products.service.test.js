const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

const { products, productId } = require('./mocks/products.service.mock');

describe('Teste de unidade service de produtos',async function () {
  afterEach(sinon.restore);
  it('Recuperando a lista de produtos com sucesso', async function () {
    sinon.stub(productsModel, 'findAllProducts').resolves(products)
    const result = await productsService.findAllProducts();
    expect(result.type).to.deep.equal(null)
    expect(result.message).to.deep.equal(products)
  });

  it('Recuperando um produto a partir do seu id com sucesso ', async function () {
    sinon.stub(productsModel, 'findProductsById').resolves(products[0]);
    const result = await productsService.findProductsById(1);
    expect(result.message).to.be.deep.eq(products[0]);
  })
  // it('Recuperando um produto a partir do seu id sem sucesso', async function () {
  //   sinon.stub(productsModel, 'findProductsById').resolves([]);
  //   const result = await productsService.findProductsById(1);
  //   expect(result.type).to.be.deep.equal('PRODUCT_NOT_FOUND');
  // })
});