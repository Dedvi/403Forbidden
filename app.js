require('dotenv').config()
const express = require('express')
const helmet = require("helmet")
const morgan = require('morgan')
const mongoose = require('mongoose');
const app = express()
const PORT = process.env.PORT || 3000

var index = require('./routes/index');

// Middleware
  // Morgan: HTTP request logger middleware
app.use(morgan('dev'));
  // Helmet: setting various HTTP headers.
app.use(helmet());

// Connection to MongoDb
const connectDB = async () => {
    await mongoose
    .connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(console.log('Mongodb Connected...'))
    .catch(error => console.log(error))
}
// Exc function to connection to mongodb
connectDB();


// Routes
app.use('/', index)

// Start app
app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`)
})