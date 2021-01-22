const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = () => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(p, (err, fileContent) => {
      let products = [];

      if (!err) {
        products = JSON.parse(fileContent);
      }

      resolve(products);
    });
  });

  return promise;
}

const appendProductToFile = async (product) => {
  const products = await getProductsFromFile();
  products.push(product);

  fs.writeFile(p, JSON.stringify(products), console.log);
}

// Proto inheritance
function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}

// "instance" method
Product.prototype.save = async function () {
  appendProductToFile(this);
}

// "static" method
Product.fetchAll = async function () {
  return await getProductsFromFile();
}

module.exports = Product;



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