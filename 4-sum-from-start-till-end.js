const express = require('express')
const app = express()
const port = 1030

app.get('/', handleGetRequest)
app.listen (port, startListening)

function handleGetRequest (request, response)
{
  if (Object.keys(request.query).length > 0)
  {
    const start = parseInt (request.query.start, 10);
    const end = parseInt (request.query.end, 10);

    const calculatedSum = findSum (start, end)

    response.send ('findSum (' + start + ', ' + end +') = ' + calculatedSum)
  }
  else
  {
    const n = 100;

    const calculatedSum = findSum (n)

    response.send ('findSum (' + n + ') = ' + calculatedSum)
  }
}

function startListening ()
{
  console.log (`Example app listening on port ${port}`)
}

function findSum (n)
{
  let sum = 0
  for (let i = 1; i <= n; ++i)
  {
    sum += i;
  }
  return sum;
}

function findSum (start, end)
{
    let sum = 0;
    for (let i = start; i <= end; ++i)
    {
        sum += i;
    }
    return sum;
}