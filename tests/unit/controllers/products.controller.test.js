const { expect } = require('chai');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const sinon = require('sinon');
chai.use(sinonChai);

const { productsController } = require('../../../src/controllers');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const {
  allProductsReturn,
} = require('./mocks/products.controller.mock');

describe('Testes de unidade de controller de produtos', async function () {
  this.afterEach(sinon.restore);
  it('Recuperando a lista de produtos com sucesso', async function () {
    const res = {}
    const req = { body: {} }
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns()
    sinon.stub(productsService, 'findAllProducts').resolves(allProductsReturn);
    await productsController.findAllProducts(req, res);
    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(allProductsReturn.message)
  })
})