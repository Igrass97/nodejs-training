const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRouter = require('./routes/admin').router
const shopRouter = require('./routes/shop')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false })) // parses bodies sent through a form.

// Pug
app.set('view engine', 'pug')
app.set('views', 'pug-views')

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((req, res, next) => {
  res.status(404).render('404', { docTitle: '404', path: '404' })
})

app.listen(8000)

/*
  Route params:
    We can tell the express router that there will be a variable segment of the URL by writting it with :
    Example: app.get('/products/:id', productsController.getProductDetail)
    To extract the dynamic segments in the request URL (route param) we use req.params object.
  
  Query params:
    Optional parameters that can be accesed in req.query
  
*/
