const mongoose = require('mongoose')

const DB = process.env.DATABASE

mongoose.connect(DB).then(() => {
    console.log("connction Successfuly")
  }).catch((err) => {
    console.log("Connection Failed")
  })