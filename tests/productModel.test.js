// tests/productModel.test.js
const chai = require('chai');
const expect = chai.expect;
const Product = require('../models/productModel');

describe('Product Model', () => {
  it('Save product to the database', async () => {
    const productData = {
      name: 'Test Product',
      description: 'Test Description',
      price: 50,
      variants: [
        { name: 'Variant - 1', sku: 'SKU1', additionalCost: 100, stockCount: 95 },
        { name: 'Variant - 2', sku: 'SKU2', additionalCost: 150, stockCount: 60 },
      ],
    };

    const product = new Product(productData);
    await product.save();

    const savedProduct = await Product.findOne({ name: 'Test Product' });
    expect(savedProduct).to.exist;
    expect(savedProduct.name).to.equal(productData.name);
    expect(savedProduct.variants).to.have.lengthOf(2);
  });
  
});
