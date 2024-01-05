const express = require('express');
const path = require('path');
const app = express();

const port = 8080;
const pathname = path.join(__dirname, 'public');

// Set up middleware to serve static files from the 'public' directory
app.use(express.static(pathname));

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route for the 'about' URL '/'
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Define a route for the 'contact me' URL '/'
app.get('/contactMe', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contactMe.html'));
});

// Define a route for the 'error' URL '/'
app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});