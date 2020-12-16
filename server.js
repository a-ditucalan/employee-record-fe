const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const EmployeeRoute = require('./routes/employee')
const AuthRoute = require('./routes/auth')
mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
mongoose.Promise = global.Promise
db.on('error',(err)=> {
  console.log(err)
})

db.once('open',()=> {
  console.log("database connection established!")
})

const app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
    return res.status(200).json({})
  }

  next()
})
const PORT = process.env.PORT || 5000

app.listen(PORT,()=> {
  console.log(`Server is running on port ${PORT}`)
})

app.use('/api/employee',EmployeeRoute)
app.use('/api',AuthRoute)