const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest (req, res)
{
    res.send ('Hello, world!')
}

function start ()
{
    console.log (`Example app listening on port ${port}`)
}

app.get('/', handleFirstRequest)
app.listen (port, start)

/*
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/