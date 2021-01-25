const Product = require('../models/Product');

const postAddProduct = (req, res, next) => {
  const { name, price, stock, imageURL } = req.body;

  const p = new Product(name, price, stock, imageURL);
  p.save();

  res.redirect('/product-list');
}

const getAddProduct = (req, res, next) => {
  res.render('admin/add-product', { docTitle: 'Add a new product', path: '/admin/add-product' });
}

const getStockList = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('admin/stock-list', { docTitle: 'Stock manager', path: '/admin/stock-list', products });
}

const getEditProduct = (req, res, next) => {
  res.render('admin/edit-product', { products: products, docTitle: 'Shop', path: '/admin/edit-product' });
}

const getHomepage = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('shop/index', { docTitle: 'Home', path: '/', products });
}

const getProductList = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('shop/product-list', { products, docTitle: 'Shop', path: '/product-list' });
}

const getCart = (req, res, next) => {
  res.render('shop/cart', { docTitle: 'Your cart', path: '/cart' });
}

const getProductDetail = (req, res, next) => {
  res.render('shop/product-detail', { docTitle: 'Product detail', path: '/product-detail' });
}

const getCheckout = (req, res, next) => {
  res.render('shop/checkout', { docTitle: 'Checkout', path: '/checkout' });
}

module.exports = {
  postAddProduct,
  getAddProduct,
  getStockList,
  getEditProduct,
  getHomepage,
  getProductList,
  getCart,
  getProductDetail,
  getCheckout
}
