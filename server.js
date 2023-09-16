const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/rest-api", (req, res) => {
  const buttonRegister = "Register";
  const moneyValue = "$1,600";
  const depositValue = "Deposit money";

  res.json({
    money: moneyValue,
    deposit: depositValue,
    buttonr: buttonRegister,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
