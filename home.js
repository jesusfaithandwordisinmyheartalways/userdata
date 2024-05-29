




 document.querySelector('.stock-btn').addEventListener('click', stocksDisplay)

 document.querySelector('.crypto-btn').addEventListener('click', cryptoDisplay)

 document.querySelector('.fund-btn').addEventListener('click', fundHome)

 


 function stocksDisplay() {
    window.location.href = '/companyStock.html'
 }

 function cryptoDisplay() {
      window.location.href = "/crypto.html"
 }


 function fundHome() {
   window.location.href = "/commodities.html"
}



