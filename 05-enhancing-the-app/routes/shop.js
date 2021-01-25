const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.getHomepage);
router.get('/product-list', productsController.getProductList);
router.get('/cart', productsController.getCart);
router.get('/product-detail', productsController.getProductDetail);
router.get('/checkout', productsController.getCheckout);

module.exports = router;