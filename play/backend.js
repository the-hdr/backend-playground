const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use (bodyParser.json());

app.get ('/', handleGetRequest1);
app.get ('/g', handleGetRequest2);

app.listen (port, startListening);

function handleGetRequest1 (request, response)
{
    let termNumber = parseInt (request.query.termNumber);
    let calculatedTerm = fibonacci (termNumber);
    
    const answerObject = {
        "calculated-term": calculatedTerm
    }

    console.log (answerObject);
    
    response.status(200).send (answerObject);
}

function handleGetRequest2 (request, response)
{
    response.send (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Hello From Page </title>
    </head>
    
    <body>
        <b> Hey there! </b>
    </body>
    </html>
    `);
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