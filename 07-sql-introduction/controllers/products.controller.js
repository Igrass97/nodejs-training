const Cart = require('../models/Cart')
const Product = require('../models/Product')

const postAddProduct = async (req, res, next) => {
  const { name, price, stock, imageURL, description } = req.body
  const p = new Product(name, price, stock, imageURL, description)

  await p.save()

  res.redirect('/products')
}

const getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    docTitle: 'Add a new product',
    path: '/admin/add-product',
    p: {
      name: '',
      description: '',
      price: '',
      stock: '',
      imageURL: '',
    },
  })
}

const getEditProduct = async (req, res, next) => {
  const { editing } = req.query
  const { id } = req.params

  if (!editing) {
    return res.redirect('/')
  }

  let p

  try {
    p = await Product.fetchById(id)
  } catch {
    return res.redirect('/')
  }

  res.render('admin/edit-product', {
    docTitle: 'Edit product',
    path: '/admin/edit-product',
    editing,
    p,
  })
}

const postEditProduct = async (req, res, next) => {
  const { id } = req.params

  try {
    await Product.updateById(id, req.body)
    return res.redirect('/admin/stock-list')
  } catch {
    res.sendStatus(404)
  }
}

const getStockList = async (req, res, next) => {
  const products = await Product.fetchAll()
  res.render('admin/stock-list', {
    docTitle: 'Stock manager',
    path: '/admin/stock-list',
    products,
  })
}

const getHomepage = async (req, res, next) => {
  const [products, metadata] = await Product.fetchAll()
  res.render('shop/index', { docTitle: 'Home', path: '/', products })
}

const getProductList = async (req, res, next) => {
  const [products, metadata] = await Product.fetchAll()
  res.render('shop/product-list', {
    products,
    docTitle: 'Shop',
    path: '/products',
  })
}

const getCart = (req, res, next) => {
  res.render('shop/cart', { docTitle: 'Your cart', path: '/cart' })
}

const postCart = async (req, res, next) => {
  const { id } = req.body

  const p = await Product.fetchById(id)

  if (p.stock > 0) {
    Cart.addProduct(id, p.price)
  }

  res.redirect('/cart')
}

const getProductDetail = async (req, res, next) => {
  const { id } = req.params
  const [products, metadata] = await Product.fetchById(id)

  res.render('shop/product-detail', {
    docTitle: 'Product detail',
    path: '/products/',
    product: products[0],
  })
}

const getCheckout = (req, res, next) => {
  res.render('shop/checkout', { docTitle: 'Checkout', path: '/checkout' })
}

module.exports = {
  postAddProduct,
  getAddProduct,
  getStockList,
  getEditProduct,
  getHomepage,
  getProductList,
  getCart,
  postCart,
  getProductDetail,
  getCheckout,
  postEditProduct,
}
