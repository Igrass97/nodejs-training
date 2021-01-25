const express = require('express');
const path = require('path');

const productsController = require('../controllers/products.controller');

const router = express.Router();

router.post('/add-product', productsController.postAddProduct);
router.get('/add-product', productsController.getAddProduct);
router.get('/edit-product', productsController.getEditProduct);
router.get('/stock-list', productsController.getStockList);

module.exports = {
  router,
};