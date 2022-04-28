const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query)
  // Solution by Tech lead in live sorted with parseInt
  // res.send(req.query.number1+req.query.number2)
  res.send(parseInt(req.query.number1)+parseInt(req.query.number2))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// http://localhost:3000/?number1=1&number2=2