const http = require('http')
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
}).listen(8080)
