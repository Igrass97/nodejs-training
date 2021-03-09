The code in this module is garbage, the only important takeaway is route params and query params

# Route params

You can define dynamic parts of an URL with the following syntax: `app.get('products/:id', productsController)` where :id is the dynamic portion. You can access this data in the controller by using the `req.params` object

# Query params

Query params are like optional parameters that you can specify in the URL that will alter the behaviour of the request.
They don't need to be specified in the route path declaration. Adding `?queryParam1=value&queryparam2=value` to the request URL will provide query params in `req.query`
