





  const cryptoData = async () => {
        try {
            const cryptoAPI_KEY = ''
            const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/BTCUSD?apikey=${cryptoAPI_KEY}`);
            const responseTwo = await fetch(`https://financialmodelingprep.com/api/v3/quote/ETHUSD?apikey=${cryptoAPI_KEY}`);
            const response3 = await fetch(`https://financialmodelingprep.com/api/v3/quote/T99USD?apikey=${cryptoAPI_KEY}`);
            const crypto = await response.json()
            const ethereum = await responseTwo.json()
            const tether = await response3.json()
            console.log(crypto)
            console.log(ethereum)
            console.log(tether)

            //push data from the Full Crypto Quote API
            document.querySelector('.bitcoin-name-text').innerHTML = crypto[0].name;
            document.querySelector('.bitcoin-symbol').innerHTML = crypto[0].symbol
            document.querySelector('.short-name').innerHTML = crypto[0].exchange;
            document.querySelector('.bitcoin-price-text').innerHTML = crypto[0].price.toFixed(2);
            document.querySelector('.bitcoin-price-change').innerHTML = crypto[0].change.toFixed(3);
            document.querySelector('.bitcoin-percentage').innerHTML = crypto[0].changesPercentage.toFixed(5) + "%";     //Used ai ASSISTANCE TO GENERATE THE CODE NEEDED FOR THE DECIMAL PLACES and Google research
            document.querySelector('.bitcoin-previous-close-text').innerHTML = Math.round(crypto[0].previousClose / Math.pow(10, Math.floor(Math.log10(crypto[0].previousClose)))).toFixed(2) + "k";
            document.querySelector('.bitcoin-market-cap-text').innerHTML = Math.round(crypto[0].marketCap / Math.pow(10, Math.floor(Math.log10(crypto[0].marketCap)))).toFixed(2) + "T";
            document.querySelector('.bitcoin-volume-text').innerHTML = Math.round(crypto[0].volume / Math.pow(10, Math.floor(Math.log10(crypto[0].volume)) - 1) * 100 / 100 ).toFixed(2) + "B";
            document.querySelector('.bitcoin-open-text').innerHTML = Math.round(crypto[0].open / Math.pow(10, Math.floor(Math.log10(crypto[0].open)) - 1 ) * 100 / 100).toFixed(2) + "k";
            document.querySelector('.bitcoin-avg-volume-text').innerHTML = Math.round(crypto[0].avgVolume / Math.pow(10, Math.floor(Math.log10(crypto[0].avgVolume)) - 1 ) * 100 / 100).toFixed(2) + "B"; 
            document.querySelector('.bitcoin-day-high-text').innerHTML =  Math.round(crypto[0].dayHigh / Math.pow(10, Math.floor(Math.log10(crypto[0].dayHigh)) - 1 ) * 100 / 100).toFixed(2) + "k";
            document.querySelector('.bitcoin-day-low-text').innerHTML = Math.round(crypto[0].dayLow / Math.pow(10, Math.floor(Math.log10(crypto[0].dayLow)) - 1 ) * 100 / 100).toFixed(2) + "k";



            document.querySelector('.ethereum-name-text').innerHTML = ethereum[0].name;
            document.querySelector('.ethereum-symbol').innerHTML = ethereum[0].symbol;
            document.querySelector('.ethereum-short-name').innerHTML = ethereum[0].exchange;
            document.querySelector('.ethereum-price-text').innerHTML = ethereum[0].price.toFixed(2);
            document.querySelector('.ethereum-price-change').innerHTML = ethereum[0].change.toFixed(4);
            document.querySelector('.ethereum-percentage').innerHTML = ethereum[0].changesPercentage.toFixed(5) + "%";
            document.querySelector('.ethereum-previous-close-text').innerHTML = Math.round(ethereum[0].previousClose / Math.pow(10, Math.floor(Math.log10(ethereum[0].previousClose)))).toFixed(2) + "k";
            document.querySelector('.ethereum-market-cap-text').innerHTML = Math.round(ethereum[0].marketCap / Math.pow(10, Math.floor(Math.log10(ethereum[0].marketCap)))).toFixed(2) + "T";
            document.querySelector('.ethereum-volume-text').innerHTML = Math.round(ethereum[0].volume / Math.pow(10, Math.floor(Math.log10(ethereum[0].volume)) - 1) * 100 / 100).toFixed(2) + "B";
            document.querySelector('.ethereum-open-text').innerHTML = Math.round(ethereum[0].open / Math.pow(10, Math.floor(Math.log10(ethereum[0].open)) - 1) * 100 / 100).toFixed(2) + "k";
            document.querySelector('.ethereum-avg-volume-text').innerHTML = Math.round(ethereum[0].avgVolume / Math.pow(10, Math.floor(Math.log10(ethereum[0].avgVolume)) - 1 ) * 100 / 100).toFixed(2) + "B";
            document.querySelector('.ethereum-day-high-text').innerHTML = Math.round(ethereum[0].dayHigh / Math.pow(10, Math.floor(Math.log10(ethereum[0].dayHigh)) - 1) * 100 / 100).toFixed(2) + "k";
            document.querySelector('.ethereum-day-low-text').innerHTML = Math.round(ethereum[0].dayLow / Math.pow(10, Math.floor(Math.log10(ethereum[0].dayLow)) - 1) * 100 / 100).toFixed(2) + "k";


            document.querySelector('.tether-name-text').innerHTML = tether[0].name;
            document.querySelector('.tether-symbol').innerHTML = tether[0].symbol;
            document.querySelector('.tether-short-name').innerHTML = tether[0].exchange;
            document.querySelector('.tether-price-text').innerHTML = tether[0].price.toFixed(6);
            document.querySelector('.tether-price-change').innerHTML = tether[0].change.toFixed(5);
            document.querySelector('.tether-percentage').innerHTML = tether[0].changesPercentage.toFixed(5) + "%";
            document.querySelector('.tether-previous-close-text').innerHTML = Math.round(tether[0].previousClose / Math.pow(10, Math.floor(Math.log10(tether[0].previousClose)))).toFixed(2) + "k";
            document.querySelector('.tether-market-cap-text').innerHTML = Math.round(tether[0].marketCap / Math.pow(10, Math.floor(Math.log10(tether[0].marketCap)))).toFixed(2) + "T";
            document.querySelector('.tether-volume-text').innerHTML = Math.round(tether[0].volume / Math.pow(10, Math.floor(Math.log10(tether[0].volume)) - 1) * 100 / 100).toFixed(1) + "M";
            document.querySelector('.tether-open-text').innerHTML =  Math.round(tether[0].open / Math.pow(10, Math.floor(Math.log10(tether[0].open)) - 1) * 100 / 100).toFixed(2) + "k";
            document.querySelector('.tether-avg-volume-text').innerHTML = Math.round(tether[0].avgVolume / Math.pow(10, Math.floor(Math.log10(tether[0].avgVolume)) - 1) * 1000 / 1000).toFixed(1) + 'k';
            document.querySelector('.tether-day-high-text').innerHTML = Math.round(tether[0].dayHigh / Math.pow(10, Math.floor(Math.log10(tether[0].dayHigh)) - 1) * 100 / 100).toFixed(2) + "k";
            document.querySelector('.tether-day-low-text').innerHTML = Math.round(tether[0].dayLow / Math.pow(10, Math.floor(Math.log10(tether[0].dayLow)) - 1) * 100 / 100).toFixed(2) + "k";



        } catch(error) {
            console.log(`Error: ${response.status}: ${response.statusText}`)
        }
  }

    
      
   

  
 


       
  









document.querySelector('.stock-btn').addEventListener('click', stockPage)

document.querySelector('.home-btn').addEventListener('click', homePage)

document.querySelector('.fund-btn').addEventListener('click', fundHome)

document.querySelector('.forex-btn').addEventListener('click', forexHomePage)


function stockPage() {
    window.location.href = "/companyStock.html"
}

function homePage() {
    window.location.href = "/home.html"
}

function fundHome() {
    window.location.href = "/commodities.html"
}


function forexHomePage() {
    window.location.href = "/forex.html"
}


