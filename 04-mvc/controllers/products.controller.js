const Product = require('../models/Product');

const postAddProduct = (req, res, next) => {
  const { name, price, stock } = req.body;

  const p = new Product(name, price, stock);
  p.save();

  res.redirect('/');
}

const getAddProduct = (req, res, next) => {
  res.render('admin', { docTitle: 'Add a new product', path: '/add-product' });
}

const getShop = async (req, res, next) => {
  const products = await Product.fetchAll();
  res.render('shop', { products: products, docTitle: 'Shop', path: '/' });
}

module.exports = {
  postAddProduct,
  getAddProduct,
  getShop
}
