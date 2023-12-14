const express = require('express')
const app = express()
const port = 3000

app.get('/', handleGetRequest)  // accepting get requests on the '/' route;
app.listen (port, startListening) // binding a port to listen to
                                  // the specified host and port;

function handleGetRequest (request, response)
{
    response.send ('Hello, world');
}

function startListening ()
{
    console.log ('Started listening');
}