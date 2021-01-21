const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRouter = require('./routes/admin').router;
const shopRouter = require('./routes/shop');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false })); // parses bodies sent through a form.

// Pug
app.set('view engine', 'pug');
app.set('views', 'pug-views');

app.use(adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).render('404', { docTitle: '404', path: '404' });
});

app.listen(8000);

/*
  MVC Pattern
  
*/