const express = require('express')
const app = express()
const port = 3000

app.post('/', handlePostRequest)
app.listen (port, startListening)

function handlePostRequest (request, response)
{
    const n = parseInt (request.headers.n);
    
    console.log (`n = ${n}`);

    response.send (`f(${n}) = ${findSumTill(n)}`);
}

function startListening()
{
    console.log (`Started listening on port #${port}`);
}

function findSumTill (n)
{
    return (n*(n + 1))/2;
}