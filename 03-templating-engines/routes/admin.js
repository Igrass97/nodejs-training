const express = require('express');
const path = require('path');

const router = express.Router();
const products = [];

router.post('/add-product', (req, res, next) => {
  const { body } = req;
  products.push({ name: body.name, price: body.price, stock: body.stock });

  res.redirect('/');
});

router.get('/add-product', (req, res, next) => {
  res.render('admin', { docTitle: 'Add a new product' });
});

module.exports = {
  router,
  products
};