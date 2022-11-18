const { expect } = require('chai');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const sinon = require('sinon');
chai.use(sinonChai);

const { productsController } = require('../../../src/controllers');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const {
  allProductsReturn, products,
} = require('./mocks/products.controller.mock');


describe('Testes de unidade de controller de produtos', async function () {
  afterEach(sinon.restore);

  it('Recuperando a lista de produtos com sucesso', async function () {
    const res = {}
    const req = { body: {} }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns()
    sinon.stub(productsService, 'findAllProducts').resolves(allProductsReturn);

    await productsController.findAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(allProductsReturn.message)
  });

  it('Recuperando produto especifico com sucesso', async function () {
    const res = {}
    const req = {
      params: {
        id: 1
      }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns()
    sinon.stub(productsService, 'findProductsById').resolves(products[0])

    await productsController.findProductById(req, res)

    expect(res.status).to.have.been.calledWith(200)
  })

  it('Inserindo novo produto', async function () {
    const res = {}
    const req = {
      body: {
        name: 'ProdffutoX'
      }
    }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns()
    sinon.stub(productsService, 'insertProduct').resolves({
      id: 1,
      name: 'ProdffutoX',
    });

    await productsController.insertProduct(req, res);

    expect(res.status).to.have.been.calledWith(201)
  })

  it('Atualiza um produto', async function () {
    const res = {}
    const req = {
      params: {
        id: 1
      }, 
      body: {
        name: 'ProdffutoX'
      }
    }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns()
    sinon.stub(productsService, 'updateProduct').resolves({
      id: 1,
      name: 'ProdffutoX',
    });

    await productsController.updateProduct(req, res)

    expect(res.status).to.have.been.calledWith(200)
  })

  // it('Deleta um produto', async function () {
  //   const res = {};
  //   const req = {
  //     params: {
  //       id: 1,
  //     }
  //   }

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns()
  //   sinon.stub(productsService, 'deleteProduct').resolves({
  //     isError: false,
  //   });

  //   await productsController.deleteProduct(req, res)

  //   expect(res.status).to.have.been.calledWith(204)
  // })
})