const express = require('express')
const helmet = require("helmet")
const morgan = require('morgan')
const app = express()
const PORT = 3000

// Middleware
  // Morgan: HTTP request logger middleware
app.use(morgan('dev'));
  // Helmet: setting various HTTP headers.
app.use(helmet());

app.get('/', (req, res) => {
  res.json({ message: "Welcome to Artilingo API 🌐" });
})

// Start app
app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`)
})