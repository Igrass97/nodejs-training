const fs = require('fs')
const path = require('path')

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
)

function Cart() {}

Cart.addProduct = (id, productPrice) => {
  fs.readFile(p, (err, cartJSON) => {
    let cart = { products: [], totalPrice: 0 }
    if (!err) cart = { ...JSON.parse(cartJSON) }

    const existingProductIndex = cart.products.findIndex((p) => p.id === id)

    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].qty++
    } else {
      const newProduct = { id, qty: 1, productPrice }
      cart.products.push(newProduct)
    }

    cart.totalPrice = +cart.totalPrice + +productPrice

    fs.writeFile(p, JSON.stringify(cart), (err) => {
      if (err) {
        console.log('Error saving cart')
      }
    })
  })
}

module.exports = Cart
