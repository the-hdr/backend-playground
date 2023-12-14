const express = require('express')
const app = express()
const port = 3000

let numberOfRequests = 0;

app.use (middleWare);

app.post('/', handlePostRequest);
app.get('/g', handleGetRequest);

app.listen (port, startListening);

function startListening()
{
    console.log (`Started listening on ${port}`);
}

function middleWare (request, response, next)
{
   ++numberOfRequests;
   console.log (`Number of requests = ${numberOfRequests}`);
   next();
}

function handleGetRequest (request, response)
{
    console.log ('CONSOLE: Got a GET request');
    response.send ('RESPONSE: Got a GET request');
}

function handlePostRequest (request, response)
{
    let n = parseInt (request.headers.n);
    console.log (`CONSOLE: Got a POST request with a parameter n = ${n}`);
    response.send (`RESPONSE: Got a POST request with a parameter n = ${n}`);
}

/*

The output is weird but ok.

I don't understand why when I send a request to the '/' route using the browser it just prints the number of requests. According to me, it should also print that it got a POST request and so on. So, did it never go into the next() function? Why?

ANSWER: All requests are interpreted as GET requests by the browser, by default. Now, I think that because the request is being interpreted as a GET request and there is no route defined for it, so the control does not go anywhere. It just stops there.
*/