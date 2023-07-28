const dotenv = require('dotenv')
const express = require('express');
const app = express();


dotenv.config({path : "./config.env"})

// const User = require('./model/userSchema')
const PORT = process.env.PORT

require('./db/conn')

// middleware

const middleware = (req,res,next) => {
  console.log("hello my middleware")
  next();
}

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', middleware, function (req, res) {
    console.log("Hello my about")
    res.send('ABout Page')
  })
  
app.get('/contact', function (req, res) {
    res.send('Contact Page')
  })

app.listen(PORT, () => {
    console.log(`server run ${PORT}` )
})