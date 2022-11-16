/* const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.readFile('index.html', function (err, data) {
      if (err) throw err
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else if (req.url === '/about') {
    fs.readFile('about.html', function (err, data) {
      if (err) throw err
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else if (req.url === '/contactMe') {
    fs.readFile('contactMe.html', function (err, data) {
      if (err) throw err
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else {
    fs.readFile('404.html', function (err, data) {
      if (err) throw err
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  }
}).listen(8080) */

const express = require('express')
const path = require('path')
const app = express()
const pathname = path.join(__dirname, 'public')
const PORT = process.env.PORT || 8080
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(pathname + '/index.html')
})

app.get('/about', (req, res) => {
  res.sendFile(pathname + '/about.html')
})

app.get('/contactMe', (req, res) => {
  res.sendFile(pathname + '/contactMe.html')
})

app.use('/404', (req, res) => {
  res.sendFile(pathname + '/404.html')
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
