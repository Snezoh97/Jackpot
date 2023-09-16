$(document).ready(function () {
  $.get("/rest-api", function (data) {
    const moneyValue = "$1,600";
    const depositValue = "Deposit money";

    $("#money").text(moneyValue);
    $("#deposit").text(depositValue);
  });
});
