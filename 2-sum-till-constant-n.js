const express = require('express')
const app = express()
const port = 5000

app.get('/', handleGetRequest)
app.listen (port, startListening)

function handleGetRequest (request, response)
{
  // finding and sending sum of first 100 natural numbers:
  const n = 100
  const calculatedSum = findSum (n)

  // not sending the sum directly because, it would consider it
  // to be a response code:
  response.send ('findSum (' + n + ') = ' + calculatedSum)
}

function startListening ()
{
  console.log (`Example app listening on port ${port}`)
}

// function to find the sum of the first n natural numbers:
function findSum (n)
{
  let sum = 0
  for (let i = 1; i <= n; ++i)
  {
    sum += i;
  }
  return sum;
}

/*
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/
