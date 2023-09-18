const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/rest-api", (req, res) => {
  const moneyValue = "$1,600";
  const depositValue = "Deposit money";

  res.json({
    money: moneyValue,
    deposit: depositValue,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
