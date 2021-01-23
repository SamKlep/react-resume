import path from 'path'
import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build')) // serve the static react app
  app.get(/^\/(?!api).*/, (req, res) => {
    // don't serve api routes to react app
    res.sendFile(path.join(__dirname, './client/build/index.html'))
  })
  console.log('Serving React App...')
}

// Body parser
app.use(express.json())

// Set static folder
app.use(express.static(path.join(import.meta.url, 'public')))

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
