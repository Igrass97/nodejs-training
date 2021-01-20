# ExpressJS:
You create an express application by running express().

## Middlewares:
It's all about middleware. The incoming requests are passed through a bunch of functions by express js, named `middlewares`.
It's "pluggable".
Middleware functions are executed for every incoming requests.
Receives `req`, `res` and `next` as parameters.
`app.use()` allows us to add middlewares to the application.
`next()` allows the request to travel to the next middlewares.
If you're not sending a response, you should call `next()`.
Express doesn't send a default response.

## Sending responses:
We can use the same functionalities as nodejs request object.
`res.send()` allows us to send a response, you can attach a `body` into the response.
`res.redirect()` allows us to redirect to another route.

## Handling different routes:
We can pass a first parameter to `app.use()` that determines the route that will match.
Note that the filter for the route only checks if the path begins with the given string,
so for example, if you want to handle requests to the root of the app `/` you will put that
middleware on the bottom.

## Parsing incoming requests:
`req.body` holds the `body` of the request.
Express won't try to parse the body of the request, instead we need to register a `body parser` as a middleware.
`body-parser` it's a 3rd party package that holds middlewares to parse request bodies.
`bodyParser.urlencoded()` parses bodies sent through a form.

## Limiting middleware execution to HTTP Verbs:
`app.get()`
`app.post()`
`app.delete()`
`app.patch()`
`app.put()`
These functions, unlike `app.use()` will do an exact match on the route.

## Using express router:
We want to split our routing code over multiple files.
For that purpose, we can use the `express router`.
To instanciate a router we use `express.Router()`.
This creates like a "mini" express app that plugs into our main app.
Then, we import the router and plug it in `app.use()`
Sometimes, routes have common starting paths, if that is the case, we can use `app.use('/admin', adminRouter)` as a filter.
Now, only routes starting with `/admin` will go into the admin router.

## Unhandled routes (handle 404's):
The requests will go from top to bottom. So we need to add our handler into the bottom of the line.

## Status codes:
If we want to send an specific status code for our response, we can chain the functions like this `res.status(statusCode).send(body)`.

## Setting headers:
If we want to send an specific headers for our response, we can chain the functions like this `res.setHeaders(headers).send(body)`.

## Path:
It's used to construct paths that works on all OS.
`path.join() `concatenates portions of the path.
`__dirname` holds the absolute on our OS to the file in which is used.

## Serve files:
We can use `res.sendFile(path)` in order to send files like HTML.
We want some request to actually access the file system and fetch static files.
Static files are files that aren't handled by the server's router or logic, they're server directly.
`app.use(express.static(path.join(__dirname, 'public')))` will serve files in the public directory.
If the client requested a file, express will forward that request to the `public` folder.