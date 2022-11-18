const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { products, productsDeleted, oneAffectedRows } = require('./mocks/products.model.mock');

describe('Testes de unidade do model de produtos', function () {
  afterEach(sinon.restore);
// mockar a consulta no BD 
  it('Recuperando a lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productsModel.findAllProducts();
    expect(result).to.be.deep.equal(products);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productsModel.findProductsById(1);
    expect(result).to.be.deep.equal(products[0]);
  });
  
  it('Adicionando novo produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const result = await productsModel.insertProduct({ name: 'ProdggutoX' })
    expect(result.affectedRows).to.be.deep.equal(1);


  })

  it('Atualizando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves(oneAffectedRows);
    const result = await productsModel.updateProduct(1, { name: 'ProdggutoX' });
    // expect(result).to.be.deep.equal(resultUpdateById);
    expect(result.affectedRows).to.be.equal(1);
  });

  it('Deletando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves(oneAffectedRows);
    const result = await productsModel.deleteProduct(1);
    // expect(result).to.be.deep.equal(resultUpdateById);
    expect(result.affectedRows).to.be.equal(1);
  });
});
