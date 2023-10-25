const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080; // You can change this to any port you prefer

// Define a route to serve the JSON data
app.get('/properties', (req, res) => {
  // Read the JSON file
  fs.readFile('properties.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Parse the JSON data and send it as a response
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
