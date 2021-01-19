# Basics and HTTP Server
## Event Loop
  Process that keeps going as long as there are event listeners registered.
  NodeJS uses an event driven pattern because it uses a single thread.
  It executes code whenever an event occurs.
  `process.exit()` kills the app.

## Request object
  Object generated with all the data of the incoming request.
  Most used info: `url`, `method` and `headers`.
  Request body comes in a stream data.

## Response object
  We can use this object to fill it with data that we want to send back.
  Also, it ships methods like `setHeader()`.
  To send a response you write it with `req.write()` and when you are done, `res.end()`.

## FS
  It's used to interact with the file system.

## Streams
  A stream is an ongoing process, the request is read by NodeJS in chunks (parts).
  This is made to work with individual chunks before the whole request is read.
  Idea: start working with the data early.
  You can't arbitrary pick a chunk to work with, instead, you'll use buffers to do so.

## Buffers
  They're like bus stops. It's a construct that allows you to hold multiple chunks of data and work with them.
  You can use Buffer.concat to take an array of chunks and parse them into a buffer.

## Listen to req events
  `req.on()` allows you to listen to certain events, like the data event.
  The `data` event is fired each time a new chunk of data can be read.
  The `end` event is fired whenever the whole request is read.

## Single thread & Event Loop
  The event loop is automatically started by nodejs.
  It's responsible to handle event callbacks.
  It will contain only callbacks that contains fast executing code.
  Our fs operation and a couple of others long taking operations, are handled by the Worker Pool.
  The Worker Pool does all the heavy lifting and it does run in multiple threads, it's deatached from your code.
  Once the worker it's done, it will trigger the callback for that operation.

  ### Event Loop order
  1. Timers callback (setTimeout, setInterval) 
  2. Pending callbacks (execute I/O-related callbacks that were deferred, disk, network)
  3. Poll (retrieve new I/O events, execute their callbacks, if that is not possible it deffers that callbacks)
  At this point checks again if there are timers and jump back if necessary, if not it continues:
  4. Check (setImmediate)
  5. Close event callbacks.

  `refs` contains the amount of active event listeners.

## Node module system
  You can create your own modules by using `module.exports` and the require it in other files.