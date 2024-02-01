// tests/searchRoutes.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const Product = require('../models/productModel');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Search Routes', () => {
  beforeEach((done) => {
    // Add some test data
    const product = new Product({
      name: 'Product 2',
      description: 'Description 2',
      price: 70,
      variants: [{ name: 'Variant 3', sku: 'SKU789', additionalCost: 15, stockCount: 80 }],
    });
    product.save(() => {
      done();
    });
  });

  it('Search products', (done) => {
    chai
      .request(app)
      .get('/api/search?keyword=Product')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.eql(2); // Including the previously created product
        done();
      });
  });
  
});
