const express = require('express')
const app = express()
const port = 3000

app.get('/contacts', (req, res) => {
  res.json({
    city: "Grozny",
    street: "Trosheva",
    building: 7
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})