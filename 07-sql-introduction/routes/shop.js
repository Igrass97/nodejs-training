const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.getHomepage);
router.get('/products', productsController.getProductList);
router.get('/cart', productsController.getCart);
router.post('/cart', productsController.postCart);
router.get('/products/:id', productsController.getProductDetail);
router.get('/checkout', productsController.getCheckout);

module.exports = router;