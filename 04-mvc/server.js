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
    Logical separation of concerns. You know exactly which part of your code is responsible for each task.

    Models
      Represents the data in your code.
      Allows you to work with your data (CRUD).
    
    Views
      What the user sees.
      Renders the right content and sends it to the user.
      It's decoupled from your code.

    Controllers
      Connects the views with the models.
      Triggers the process of saving and fetching data on the models.
      Sends the data from the models to the views.
      It's the middleman (:

    Routes
        Decides what controller will handle each route + http verb.
*/