const express = require('express')
const app = express()
const port = 3000

app.use (middleWare);

app.post('/', handlePostRequest);
app.listen (port, startListening);

/*
middle-ware syntax:
app.use (<middleware-name>);

function <middleware-name> (request, response, next)
{
    // the actual code;
    next();
}
app.use (<middleware-name>);
*/
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
    const result = sumTill (n);

    response.send ('f(' + n + ') = ' + String (result));
}

function startListening ()
{
    console.log (`Example app listening on port ${port}`);
}

function sumTill (n)
{
    let s = 0;
    for (let i = 1; i <= n; ++i)
    {
        s += i;
    }
    return s;
}