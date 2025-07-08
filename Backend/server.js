// server.js
const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'attendance/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
