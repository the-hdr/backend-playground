const express = require('express')
const app = express()
const port = 3000

app.get('/', handleGetRequest)  // accepting get requests on the '/' route;
app.listen (port, startListening) // binding a port to listen to
                                  // the specified host and port;

function handleGetRequest (request, response)
{
    const n = parseInt (request.query.n);
    const sum = findSumTill (n);
    response.send (`f(${n}) = ${sum}`);
}

function findSumTill(n)
{
    return (n*(n + 1)) / 2;
}

function startListening()
{
    console.log (`Started listening on port ${port}`);
}