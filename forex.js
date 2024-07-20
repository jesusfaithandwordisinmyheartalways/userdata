





async function forexData() {
    try {
        const API_KEY = 'L4CtT6Bfxousyz7LWW0Qx2oQr48qmCC8'
        const dataResponse = await fetch(`https://financialmodelingprep.com/api/v3/quote/AUDTHB?apikey=${API_KEY}`);
        const forexResponse = await fetch(`https://financialmodelingprep.com/api/v3/quote/AEDDKK?apikey=${API_KEY}`);
        const aedResponse = await fetch(`https://financialmodelingprep.com/api/v3/quote/AEDGBP?apikey=${API_KEY}`);
        const data = await dataResponse.json()
        const forex = await forexResponse.json()
        const aedForex = await aedResponse.json()
         
        console.log(`Network is Ok: ${dataResponse.status}`, data);
        console.log(`Network is Ok: ${forexResponse.status}`, forex);
        console.log(`Network is Ok: ${aedResponse.status}`, aedForex)


    //push data to the DOM with the Full Forex Quote API
    document.querySelector('.aud-name-text').innerHTML = data[0].name;
    document.querySelector('.aud-symbol').innerHTML = data[0].symbol;
    document.querySelector('.aud-short-name').innerHTML = data[0].exchange;
    document.querySelector('.aud-price-text').innerHTML = data[0].price.toFixed(3);
    document.querySelector('.aud-price-change').innerHTML = data[0].change.toFixed(5);
    document.querySelector('.aud-percentage').innerHTML = data[0].changesPercentage.toFixed(3 ) + "%";
    document.querySelector('.aud-previous-close-text').innerHTML = Math.round(data[0].previousClose.toFixed(2));
    document.querySelector('.aud-volume-text').innerHTML = Math.round(data[0].volume.toFixed(1)) + "k";
    document.querySelector('.aud-open-text').innerHTML = data[0].open.toFixed(2);
    document.querySelector('.aud-avg-volume-text').innerHTML = data[0].avgVolume;
    document.querySelector('.aud-day-high-text').innerHTML = Math.floor(data[0].dayHigh).toFixed(2);
    document.querySelector('.aud-day-low-text').innerHTML = Math.floor(data[0].dayLow).toFixed(2);
    document.querySelector('.aud-year-high-text').innerHTML = Math.round(data[0].yearHigh).toFixed(2)
    document.querySelector('.aud-year-low-text').innerHTML = Math.round(data[0].yearLow).toFixed(2);


    document.querySelector('.aed-name-text').innerHTML = forex[0].name;
    document.querySelector('.aed-symbol').innerHTML = forex[0].symbol;
    document.querySelector('.aed-short-name').innerHTML = forex[0].exchange;
    document.querySelector('.aed-price-text').innerHTML = forex[0].price.toFixed(5);
    document.querySelector('.aed-price-change').innerHTML = forex[0].change.toFixed(5);
    document.querySelector('.aed-percentage').innerHTML = forex[0].changesPercentage.toFixed(5) + "%";
    document.querySelector('.aed-previous-close-text').innerHTML = Math.round(forex[0].previousClose.toFixed(1));
    document.querySelector('.aed-volume-text').innerHTML = Math.round(forex[0].volume).toFixed(1)
    document.querySelector('.aed-open-text').innerHTML = Math.round(forex[0].open).toFixed(2);
    document.querySelector('.aed-avg-volume-text').innerHTML = Math.floor(forex[0].avgVolume).toFixed(1);
    document.querySelector('.aed-day-high-text').innerHTML = Math.floor(forex[0].dayHigh).toFixed(2);
    document.querySelector('.aed-day-low-text').innerHTML = Math.floor(forex[0].dayLow).toFixed(2);
    document.querySelector('.aed-year-high-text').innerHTML = Math.round(forex[0].yearHigh).toFixed(2)
    document.querySelector('.aed-year-low-text').innerHTML = Math.round(forex[0].yearLow).toFixed(2);


    document.querySelector('.aedgbp-name-text').innerHTML = aedForex[0].name;
    document.querySelector('.aedgbp-symbol').innerHTML = aedForex[0].symbol;
    document.querySelector('.aedgbp-short-name').innerHTML = aedForex[0].exchange;
    document.querySelector('.aedgbp-price-text').innerHTML = aedForex[0].price.toFixed(5);
    document.querySelector('.aedgbp-price-change').innerHTML = aedForex[0].change.toFixed(5);
    document.querySelector('.aedgbp-percentage').innerHTML = aedForex[0].changesPercentage.toFixed(5) + "%";
    document.querySelector('.aedgbp-previous-close-text').innerHTML = Math.round(aedForex[0].previousClose.toFixed(2));
    document.querySelector('.aedgbp-volume-text').innerHTML = Math.round(aedForex[0].volume)
    document.querySelector('.aedgbp-open-text').innerHTML = Math.round(aedForex[0].open).toFixed(2);
    document.querySelector('.aedgbp-avg-volume-text').innerHTML = Math.round(aedForex[0].avgVolume).toFixed(1);
    document.querySelector('.aedgbp-day-high-text').innerHTML = Math.floor(aedForex[0].dayHigh).toFixed(2);
    document.querySelector('.aedgbp-day-low-text').innerHTML = Math.floor(aedForex[0].dayLow).toFixed(2);
    document.querySelector('.aedgbp-year-high-text').innerHTML = Math.round(aedForex[0].yearHigh).toFixed(2)
    document.querySelector('.aedgbp-year-low-text').innerHTML = Math.round(aedForex[0].yearLow).toFixed(2);


    } catch(error) {
        console.error(error.message)
    }
}
       
  
    forexData()







document.querySelector('.home-btn').addEventListener('click', homePageDisplay);

document.querySelector('.stock-btn').addEventListener('click', stockHomeDisplay);

document.querySelector('.crypto-btn').addEventListener('click', cryptoHomePage);

document.querySelector('.fund-btn').addEventListener('click', commodityHome)


function homePageDisplay() {
    window.location.href = "/home.html"
}

function stockHomeDisplay() {
        window.location.href = "/companyStock.html"
}

function cryptoHomePage() {
    window.location.href = "/crypto.html"
}

function commodityHome() {
    window.location.href = "/commodities.html"
}