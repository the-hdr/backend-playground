// just the boiler-plate code with some changes:

/* The changes basically include converting arrow functions to named
   functions.
*/ 

const express = require('express')
const app = express()
const port = 3000

app.get('/', handleGetRequest)  // accepting get requests on the '/' route;
app.listen (port, startListening) // binding a port to listen to
                                  // the specified host and port;

function handleGetRequest (req, res)
{
    res.send ('Hello, world!')
}

function startListening ()
{
    console.log (`Example app listening on port ${port}`)
}

/*
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/
