$(document).ready(function () {
    
    $.get('/your-server-endpoint', function (data) {
 
      const moneyValue = "$1,600";
      const depositValue = "Deposit money";
  
      //Content of the 'money' and 'deposit' elements with the new values
     
      $('#money').text(moneyValue);
      $('#deposit').text(depositValue);
    });
  });
  