const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use (bodyParser.json());

app.post('/', handlePostRequest);

app.listen (port, startListening);

function handlePostRequest (request, response)
{
    console.log (request.body);
    const n = request.body.n;
    const result = fibonacci (n);
    response.send ('f(' + String (n) + ') = ' + String (result));
}

function fibonacci (n)
{
    if (n <= 0)
    {
        return "You have lost your mind!";
    }

    let a = -1, b = 1, c;
    for (let i = 1; i <= n; ++i)
    {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

function startListening ()
{
    console.log (`Example app listening on port ${port}`);
}