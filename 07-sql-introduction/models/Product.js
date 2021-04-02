const path = require('path')
const db = require('../util/db')

// Proto inheritance
function Product(name, price, stock, imageURL, description) {
  this.name = name
  this.price = price
  this.stock = stock
  this.imageURL = imageURL
  this.description = description
}

// "instance" method
Product.prototype.save = function () {
  return db.execute(
    'INSERT INTO products (name, price, stock, imageURL, description) VALUES (?, ?, ?, ?, ?)',
    [this.name, this.price, this.stock, this.imageURL, this.description]
  )
}

// "static" methods
Product.fetchAll = function () {
  return db.execute('SELECT * FROM products')
}

Product.updateById = function (id, data) {}

Product.fetchById = function (id) {
  return db.execute('SELECT * FROM PRODUCTS WHERE id = ?', [id])
}

module.exports = Product

// ES6 Class syntax
// class Product() {
//   constructor(name, price, stock) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//   }

//   save() {
//     products.push(this);
//   }

//   static fetchAll() {
//     return products;
//   }
// }
