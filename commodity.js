








    const Commodity = async () => {
        try {
            const API_KEY = '';
            const commodityResponse = await fetch(`https://financialmodelingprep.com/api/v3/quote/PDBC?apikey=${API_KEY}`);
            const globalResponse = await fetch(`https://financialmodelingprep.com/api/v3/quote/FTGC?apikey=${API_KEY}`);
            const  dbcResponse = await fetch(`https://financialmodelingprep.com/api/v3/quote/DBC?apikey=${API_KEY}`);
            const commodity = await commodityResponse.json();
            const global = await globalResponse.json()
            const dbc = await dbcResponse.json()

            console.log(`Network Response is Ok: ${commodityResponse.status}`, commodity);
            console.log(`Network Response is Ok: ${globalResponse.status}`, global);
            console.log(`Network Response is Ok: ${dbcResponse.status}`, dbc)

            

            // push data to the dom from the Full Commodities Quote API
            document.querySelector('.pdbc-name-text').innerHTML = commodity[0].name;
            document.querySelector('.pdbc-symbol').innerHTML = commodity[0].symbol;
            document.querySelector('.pdbc-short-name').innerHTML = commodity[0].exchange;
            document.querySelector('.pdbc-price-text').innerHTML = commodity[0].price.toFixed(2)
            document.querySelector('.pdbc-range-text').innerHTML  = commodity[0].change.toFixed(2)
            document.querySelector('.pdbc-percentage-text').innerHTML = commodity[0].changesPercentage.toFixed(3) + "%";
            document.querySelector('.pdbc-previous-close-text').innerHTML = commodity[0].previousClose.toFixed(2)


            document.querySelector('.ftgc-name-text').innerHTML = global[0].name;
            document.querySelector('.ftgc-symbol').innerHTML = global[0].symbol;
            document.querySelector('.ftgc-short-name').innerHTML = global[0].exchange;
            document.querySelector('.ftgc-price-text').innerHTML = global[0].price.toFixed(2)
            document.querySelector('.ftgc-range-text').innerHTML  = global[0].change.toFixed(2)
            document.querySelector('.ftgc-percentage-text').innerHTML = global[0].changesPercentage.toFixed(3) + "%";
            document.querySelector('.ftgc-previous-close-text').innerHTML = global[0].previousClose.toFixed(2);


            document.querySelector('.db-name-text').innerHTML = dbc[0].name;
            document.querySelector('.db-symbol').innerHTML = dbc[0].symbol;
            document.querySelector('.db-short-name').innerHTML = dbc[0].exchange;
            document.querySelector('.db-price-text').innerHTML = dbc[0].price.toFixed(2);
            document.querySelector('.db-range-text').innerHTML  = dbc[0].change.toFixed(2);
            document.querySelector('.db-percentage-text').innerHTML = dbc[0].changesPercentage.toFixed(3) + "%";
            document.querySelector('.db-previous-close-text').innerHTML = dbc[0].previousClose.toFixed(2);


        } catch(error) {
            console.error(error.message)
        }
    }

  

            Commodity()
   






document.querySelector('.stock-btn').addEventListener('click', stockPage);


document.querySelector('.home-btn').addEventListener('click', homePage);

document.querySelector('.crypto-btn').addEventListener('click', cryptoHomePage)

document.querySelector('.forex-btn').addEventListener('click', forexHome)



function stockPage() {
    window.location.href = "/companyStock.html"
}


function homePage() {
    window.location.href = "/home.html"
}

function cryptoHomePage() {
    window.location.href = "/crypto.html"
}

function forexHome() {
    window.location.href = "/forex.html"
}
