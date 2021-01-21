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
  res.status(404).render('404', { docTitle: '404' });
});

app.listen(8000);

/*
  Templating engines
    Combines HTML templates with model data to produce dynamic content.
    They have an HTMLish templae (it looks like html but it has some extra features).
    Templating engines replaces placeholders and snippets with the data that we provide.
    This all happens on the server. The result is an HTML file that is sent to the client.
    Pug is registered as an engine by default. If we want to register an engine which is not in the list by default,
    we need to use app.engine('engine-name', expressHbs()).

  Set global configuration values to our app
    app.set(key, value) is used to store information.
    app.get(key) is used to retrieve that information.
    There are some reserved keys that changes how expressjs behave.

  How to plug a templating engine into an ExpressJS app
    We'll set view-engine and views configurations on our application.
    app.use('view engine', 'pug')
    app.use('views', 'pug-views')

  Render templates
    Instead of sending HTML files, we use the special res.render() method.
    It will use the default templating engine and return the view.

  Outputting dynamic content
    We can pass a second parameter to res.render('viewname', data) in order to interpolate data into the template.

  Sharing data across requests & users
    A "primitive" way to store data and share it between users and requests is to use an "in-memory" database (variable).
    For now, we'll use this approach before we learn how to connect with databases and models.
    This is not going to be used in production.

  Pug
    Layouts are "skeletons" for our views. We can extend these layouts by using blocks.
    Placeholders in layout: block "blockName"
    Extending layouts from other views
      extends layoutPath
      block "blockName"
        blockContent
*/