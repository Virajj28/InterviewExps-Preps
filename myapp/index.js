const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query)
  res.send(req.query.number1+req.query.number2)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// ## Query number1 and Query number2 output is displayed in strings.
// eg. 1+1 = 2 ...output is displayed as 11
// http://localhost:3000/?number1=1&number2=2