// index.js

const express = require('express');
const path = require('path'); // For serving static files later
const app = express();
const port = 5000; // or any port you prefer

// Middleware to parse JSON bodies
app.use(express.json());

// Define your API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Serve static files from the React build directory (optional, for production)
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
