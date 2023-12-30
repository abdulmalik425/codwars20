/*
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) .

*/

function usdcny(usd) {
    return (usd*6.75).toFixed(2) + ' Chinese Yuan';
  }
  
  usdcny(201.25)