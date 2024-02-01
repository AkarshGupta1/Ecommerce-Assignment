const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

// SEARCH FOR PRODUCTS
router.get('/', async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const results = await Product.find({
      $or: [
        { name: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } },
        { 'variants.name': { $regex: keyword, $options: 'i' } },
      ],
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
