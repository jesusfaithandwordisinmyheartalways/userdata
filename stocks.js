







   async function stockData() {
        try {
            const API_KEY = 'L4CtT6Bfxousyz7LWW0Qx2oQr48qmCC8'
            const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=${API_KEY}`)
            const responseTwo = await fetch(`https://financialmodelingprep.com/api/v3/profile/AMZN?apikey=${API_KEY}`)
            const response3 = await fetch(`https://financialmodelingprep.com/api/v3/profile/GOOG?apikey=${API_KEY}`)
            const responseFour = await fetch(`https://financialmodelingprep.com/api/v3/profile/META?apikey=${API_KEY}`)
            const bitcoinResponse = await fetch(`https://financialmodelingprep.com/api/v3/profile/BTCUSD?apikey=${API_KEY}`)
            const data = await response.json()
            const dataTwo = await responseTwo.json()
            const google = await response3.json()
            const meta = await responseFour.json()
            const bitcoin = await bitcoinResponse.json()
            console.log(data)
            console.log(dataTwo)
            console.log(google)
            console.log(meta)
            console.log(bitcoin)

                // push data from the Company Profile API to the DOM from the endpoint
            document.querySelector('.stock-name-text').innerHTML = data[0].companyName;
            document.querySelector('.symbol').innerHTML = data[0].symbol;
            document.querySelector('.short-name').innerHTML = data[0].exchangeShortName;
            document.querySelector('.stock-price-text').innerHTML = data[0].price.toFixed(2);
            document.querySelector('.stock-price-currency').innerHTML = data[0].currency;
            document.querySelector('.stock-range-text').innerHTML = data[0].changes.toFixed(2)
            document.querySelector('.ceo-text').innerHTML = data[0].ceo;
            document.querySelector('.sector-text').innerHTML = data[0].sector;
            document.querySelector('.industry-text').innerHTML = data[0].industry
            document.querySelector('.website-text').innerHTML = data[0].website;
            document.querySelector('.exchange-text').innerHTML = data[0].exchangeShortName;
            document.querySelector('.cik-text').innerHTML = data[0].cik;
            document.querySelector('.isin-text').innerHTML = data[0].isin;
            document.querySelector('.cusip-text').innerHTML = data[0].cusip;
            document.querySelector('.address-text').innerHTML = data[0].address;
            document.querySelector('.phone-text').innerHTML = data[0].phone;
            document.querySelector('.country-text').innerHTML = data[0].country;
            document.querySelector('.employee-text').innerHTML = data[0].fullTimeEmployees;
            document.querySelector('.ipo-text').innerHTML = new Date(data[0].ipoDate).toLocaleDateString();
            document.querySelector('.description-text').innerHTML = data[0].description;



            document.querySelector('.amazon-name-text').innerHTML = dataTwo[0].companyName;
            document.querySelector('.amazon-symbol').innerHTML = dataTwo[0].symbol;
            document.querySelector('.amazon-short-name').innerHTML = dataTwo[0].exchangeShortName;
            document.querySelector('.amazon-stock-price-text').innerHTML = dataTwo[0].price.toFixed(2);
            document.querySelector('.amazon-stock-price-currency').innerHTML = dataTwo[0].currency;
            document.querySelector('.amazon-stock-range-text').innerHTML = dataTwo[0].changes.toFixed(2);
            document.querySelector('.amazon-ceo-text').innerHTML = dataTwo[0].ceo;
            document.querySelector('.amazon-sector-text').innerHTML = dataTwo[0].sector;
            document.querySelector('.amazon-industry-text').innerHTML = dataTwo[0].industry
            document.querySelector('.amazon-website-text').innerHTML = dataTwo[0].website;
            document.querySelector('.amazon-exchange-text').innerHTML = dataTwo[0].exchangeShortName;
            document.querySelector('.amazon-cik-text').innerHTML = dataTwo[0].cik;
            document.querySelector('.amazon-isin-text').innerHTML = dataTwo[0].isin;
            document.querySelector('.amazon-cusip-text').innerHTML = dataTwo[0].cusip;
            document.querySelector('.amazon-address-text').innerHTML = dataTwo[0].address;
            document.querySelector('.amazon-phone-text').innerHTML = dataTwo[0].phone;
            document.querySelector('.amazon-country-text').innerHTML = dataTwo[0].country;
            document.querySelector('.amazon-employee-text').innerHTML = dataTwo[0].fullTimeEmployees;
            document.querySelector('.amazon-ipo-text').innerHTML = new Date(dataTwo[0].ipoDate).toLocaleDateString();
            document.querySelector('.amazon-description-text').innerHTML = dataTwo[0].description;



            document.querySelector('.google-name-text').innerHTML = google[0].companyName;
            document.querySelector('.google-symbol').innerHTML = google[0].symbol;
            document.querySelector('.google-short-name').innerHTML = google[0].exchangeShortName;
            document.querySelector('.google-stock-price-text').innerHTML = google[0].price.toFixed(2);
            document.querySelector('.google-stock-price-currency').innerHTML = google[0].currency;
            document.querySelector('.google-stock-range-text').innerHTML = google[0].changes.toFixed(2);
            document.querySelector('.google-ceo-text').innerHTML = google[0].ceo;
            document.querySelector('.google-sector-text').innerHTML = google[0].sector;
            document.querySelector('.google-industry-text').innerHTML = google[0].industry
            document.querySelector('.google-website-text').innerHTML = google[0].website;
            document.querySelector('.google-exchange-text').innerHTML = google[0].exchangeShortName;
            document.querySelector('.google-cik-text').innerHTML = google[0].cik;
            document.querySelector('.google-isin-text').innerHTML = google[0].isin;
            document.querySelector('.google-cusip-text').innerHTML = google[0].cusip;
            document.querySelector('.google-address-text').innerHTML = google[0].address;
            document.querySelector('.google-phone-text').innerHTML = google[0].phone;
            document.querySelector('.google-country-text').innerHTML = google[0].country;
            document.querySelector('.google-employee-text').innerHTML = google[0].fullTimeEmployees;
            document.querySelector('.google-ipo-text').innerHTML = new Date(google[0].ipoDate).toLocaleDateString();
            document.querySelector('.google-description-text').innerHTML = google[0].description;



            document.querySelector('.meta-name-text').innerHTML = meta[0].companyName;
            document.querySelector('.meta-symbol').innerHTML = meta[0].symbol;
            document.querySelector('.meta-short-name').innerHTML = meta[0].exchangeShortName;
            document.querySelector('.meta-stock-price-text').innerHTML = meta[0].price.toFixed(2);
            document.querySelector('.meta-stock-price-currency').innerHTML = meta[0].currency;
            document.querySelector('.meta-stock-range-text').innerHTML = meta[0].changes.toFixed(2);
            document.querySelector('.meta-ceo-text').innerHTML = meta[0].ceo;
            document.querySelector('.meta-sector-text').innerHTML = meta[0].sector;
            document.querySelector('.meta-industry-text').innerHTML = meta[0].industry
            document.querySelector('.meta-website-text').innerHTML = meta[0].website;
            document.querySelector('.meta-exchange-text').innerHTML = meta[0].exchangeShortName;
            document.querySelector('.meta-cik-text').innerHTML = meta[0].cik;
            document.querySelector('.meta-isin-text').innerHTML = meta[0].isin;
            document.querySelector('.meta-cusip-text').innerHTML = meta[0].cusip;
            document.querySelector('.meta-address-text').innerHTML = meta[0].address;
            document.querySelector('.meta-phone-text').innerHTML = meta[0].phone;
            document.querySelector('.meta-country-text').innerHTML = meta[0].country;
            document.querySelector('.meta-employee-text').innerHTML = meta[0].fullTimeEmployees;
            document.querySelector('.meta-ipo-text').innerHTML = new Date(meta[0].ipoDate).toLocaleDateString();
            document.querySelector('.meta-description-text').innerHTML = meta[0].description;


        } catch(error) {
                console.log(`Error:`, error)
        }
   }

    
 
 

        















document.querySelector('.home-btn').addEventListener('click', homeDisplay)
document.querySelector('.crypto-btn').addEventListener('click', cryptoHome)
document.querySelector('.fund-btn').addEventListener('click', fundHome)
document.querySelector('.forex-btn').addEventListener('click', forexHomeDisplayPage)

function homeDisplay() {
        window.location.href = '/home.html'
}



function cryptoHome() {
    window.location.href = "/crypto.html"

}


function fundHome() {
        window.location.href = "/commodities.html"
}

function forexHomeDisplayPage() {
        window.location.href = "/forex.html"
}







