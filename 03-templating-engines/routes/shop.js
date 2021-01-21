const express = require('express');

const products = require('./admin').products;

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', { products, docTitle: 'Shop' });
});

module.exports = router;