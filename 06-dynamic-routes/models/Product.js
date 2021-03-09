const fs = require('fs')
const path = require('path')

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
)

const getProductsFromFile = () => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(p, (err, fileContent) => {
      let products = []

      if (!err) {
        products = JSON.parse(fileContent)
      }

      resolve(products)
    })
  })

  return promise
}

const appendProductToFile = async (product) => {
  const products = await getProductsFromFile()
  products.push(product)

  fs.writeFile(p, JSON.stringify(products), console.log)
}

// Proto inheritance
function Product(name, price, stock, imageURL, description) {
  this.name = name
  this.price = price
  this.stock = stock
  this.imageURL = imageURL
  this.description = description
}

// "instance" method
Product.prototype.save = async function () {
  this.id = Math.random().toString()
  appendProductToFile(this)
}

// "static" method
Product.fetchAll = async function () {
  return await getProductsFromFile()
}

Product.updateById = async function (id, data) {
  const allProds = await getProductsFromFile()
  const promise = new Promise((resolve, reject) => {
    const productIndex = allProds.findIndex((p) => +p.id === +id)
    if (productIndex !== -1) {
      allProds[productIndex] = { ...data, id }
      fs.writeFile(p, JSON.stringify(allProds), console.log)
      resolve(allProds[productIndex])
    } else {
      reject(404)
    }
  })

  return promise
}

Product.fetchById = async function (id) {
  const allProds = await getProductsFromFile()

  const promise = new Promise((resolve, reject) => {
    const product = allProds.find((p) => p.id === id)

    if (!product) {
      reject(404)
    } else {
      resolve(product)
    }
  })

  return promise
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
