const express = require('express');
const app = express();
const port = 3000;

app.use (middleWare);

app.post('/', handlePostRequest);
app.listen (port, startListening);

function middleWare (request, response, next)
{
    console.log ('From inside the middleware: ' + request.headers.n);
    console.log (request.headers);
    console.log (request.query);

    if (0 > 1000)
    {
        response.send ('Error loading data.');
    }
    else
    {
        next();
    }
}

function handlePostRequest (request, response)
{
    console.log ('Now inside the handlePostRequest function');
    console.log (request.headers);

    const n = request.headers.n;

    response.send ('I got n = ' + String (n) + '! Now Imma save it in the database.');
}

function startListening ()
{
    console.log (`Example app listening on port ${port}`);
}