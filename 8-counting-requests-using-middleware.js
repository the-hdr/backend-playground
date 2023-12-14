const express = require('express')
const app = express()
const port = 3000

app.use (middleWare);

app.post('/', handlePostRequest);
app.get('/g', handleGetRequest);

app.listen (port, startListening);

let numberOfRequests = 0;

function middleWare (request, response, next)
{
    ++numberOfRequests;
    
    if (0 > 1000)
    {
        response.send ('ERROR: mathematics is an illusion');
    }
    else
    {
        next();
    }
}

function handlePostRequest (request, response)
{
    console.log (request.body);
    console.log ('Number of requests  = ' + String (numberOfRequests));
    const n = request.headers.n;

    response.send ('I got n = ' + String (n) + '! Now Imma save it in the database.');
}

function handleGetRequest (request, response)
{
    console.log ('Number of requests  = ' + String (numberOfRequests));
    response.send ('I got this!');
}

function startListening ()
{
    console.log (`Example app listening on port ${port}`);
}