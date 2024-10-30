const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Server is Running')
})

app.listen(8000, ()=>{
  console.log("server online")
})