const { expect } = require('chai');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const sinon = require('sinon');
chai.use(sinonChai);

const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');
const {
  getAllReturn, saleNotFoundError
} = require('./mocks/sales.controller.mock');


describe('Testes de unidade de controller de vendas', async function () {
  afterEach(sinon.restore);

  it('Recuperando a lista de vendas com sucesso', async function () {
    const res = {}
    const req = { body: {} }

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns()
    sinon.stub(salesService, 'findAllSales').resolves(getAllReturn);

    await salesController.findAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(getAllReturn.message)
  });

  it('Recuperando uma venda especifica com sucesso', async function () {
    const res = {}
    const req = {
      params: {
        id: 1
      }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns()
    sinon.stub(salesService, 'findSaleById').resolves(getAllReturn[0])

    await salesController.findSaleById(req, res)

    expect(res.status).to.have.been.calledWith(200)
  })

})