const express = require('express')
const app = express()
const port = 3000

app.post('/', handlePostRequest)
app.listen (port, startListening)

function handlePostRequest (request, response)
{
    console.log (request.headers);

    const n = request.headers.n;
    const result = sumTill (n);

    response.send ('f(' + n + ') = ' + String (result))
}

function startListening ()
{
    console.log (`Example app listening on port ${port}`)
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