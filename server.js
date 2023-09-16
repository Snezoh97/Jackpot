const express = require('express');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Define a route that responds with the data you want to display
app.get('/your-server-endpoint', (req, res) => {
  // Replace these with actual data retrieval logic
  const buttonRegister = "Register";
  const moneyValue = "$1,600";
  const depositValue = "Deposit money";

  // Respond with the data as JSON
  res.json({ money: moneyValue, deposit: depositValue, buttonr: buttonRegister });
});

// Start your Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
