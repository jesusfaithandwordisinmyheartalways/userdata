







   async function stockData() {
        try {
            const API_KEY = 'L4CtT6Bfxousyz7LWW0Qx2oQr48qmCC8';

            const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=${API_KEY}`)
            const response2 = await fetch(`https://financialmodelingprep.com/api/v3/profile/AMZN?apikey=${API_KEY}`);
            const response3 = await fetch(`https://financialmodelingprep.com/api/v3/profile/GOOG?apikey=${API_KEY}`);
            const response4 = await fetch(`https://financialmodelingprep.com/api/v3/profile/META?apikey=${API_KEY}`);
            const data = await response.json()
            const dataTwo = await response2.json()
            const google = await response3.json()
            const meta = await response4.json()

            console.log(`Network Status: ${response.status}:`, data)
            console.log(`Network Status: ${response.status}:`, dataTwo)
            console.log(`Network Status: ${response.status}:`, google)
            console.log(`Network Status: ${response.status}:`, meta)

            (response.status >= 400 || response.status <= 499) ? console.error(`Client Error: ${response.statusText}`) : response.statusText;
            (response.status >= 500 || response.status < 600) ? console.error(`Server Error: ${response.statusText}`) : response.statusText


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
            document.querySelector('.met-description-text').innerHTML = meta[0].description;


        } catch(error) {
               console.error(error.message)
        }
   }

       
        stockData()
        




   
   
   async function NewsData() {
                try {
                        const NEWS_KEY = '9d01c2b51c754635874c6f552ad70072';
                        const appleResponse = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2024-07-10&to=2024-07-10&sortBy=popularity&apiKey=${NEWS_KEY}`);
                        const Apple = await appleResponse.json()

                        const amazonResponse = await fetch(`https://newsapi.org/v2/everything?q=amazon&from=2024-07-10&to=2024-07-10&sortBy=popularity&apiKey=${NEWS_KEY}`)
                        const Amazon = await amazonResponse.json()
                       

                        const googleResponse = await fetch(`https://newsapi.org/v2/everything?q=google&from=2024-07-10&to=2024-07-10&sortBy=popularity&apiKey=${NEWS_KEY}`)
                        const Google = await googleResponse.json()


                        const metaResponse = await fetch(`https://newsapi.org/v2/everything?q=meta&from=2024-07-10&to=2024-07-10&sortBy=popularity&apiKey=${NEWS_KEY}`)
                        const Meta = await metaResponse.json()

                        console.log(`Network Status: ${appleResponse.status}`, Apple);
                        console.log(`Network Status: ${amazonResponse.status}`, Amazon);
                        console.log(`Network Status: ${googleResponse.status}`, Google);
                        console.log(`Network Status: ${metaResponse.status}`, Meta)




                        document.querySelector('.apple-title').innerHTML = Apple.articles[5].title;
                        document.querySelector('.apple-site-name').innerHTML = Apple.articles[5].source.name;
                        document.querySelector('.apple-news-link').href = Apple.articles[5].url;
                        document.querySelector('.apple-title-two').innerHTML = Apple.articles[13].title;
                        document.querySelector('.apple-site-name-two').innerHTML = Apple.articles[13].source.name;
                        document.querySelector('.apple-news-link-two').href = Apple.articles[13].url;
                        document.querySelector('.apple-title-three').innerHTML = Apple.articles[6].title;
                        document.querySelector('.apple-site-name-three').innerHTML = Apple.articles[6].source.name;
                        document.querySelector('.apple-news-link-three').href = Apple.articles[6].url;


                        document.querySelector('.amazon-title').innerHTML = Amazon.articles[3].title;
                        document.querySelector('.amazon-site-name').innerHTML = Amazon.articles[3].source.name;
                        document.querySelector('.amazon-news-link').href = Amazon.articles[3].url;
                        document.querySelector('.amazon-title-two').innerHTML = Amazon.articles[19].title;
                        document.querySelector('.amazon-site-name-two').innerHTML = Amazon.articles[19].source.name;
                        document.querySelector('.amazon-news-link-two').href = Amazon.articles[19].url;
                        document.querySelector('.amazon-title-three').innerHTML = Amazon.articles[9].title;
                        document.querySelector('.amazon-site-name-three').innerHTML = Amazon.articles[9].source.name;
                        document.querySelector('.amazon-news-link-three').href = Amazon.articles[9].url;


                        document.querySelector('.google-title').innerHTML = Google.articles[26].title;
                        document.querySelector('.google-site-name').innerHTML = Google.articles[26].source.name;
                        document.querySelector('.google-news-link').href = Google.articles[26].url;
                        document.querySelector('.google-title-two').innerHTML = Google.articles[48].title;
                        document.querySelector('.google-site-name-two').innerHTML = Google.articles[48].source.name;
                        document.querySelector('.google-news-link-two').href = Google.articles[48].url;
                        document.querySelector('.google-title-three').innerHTML = Google.articles[23].title;
                        document.querySelector('.google-site-name-three').innerHTML = Google.articles[23].source.name;
                        document.querySelector('.google-news-link-three').href = Google.articles[23].url;


                        document.querySelector('.meta-title').innerHTML = Meta.articles[57].title;
                        document.querySelector('.meta-site-name').innerHTML = Meta.articles[57].source.name;
                        document.querySelector('.meta-news-link').href = Meta.articles[57].url;
                        document.querySelector('.meta-title-two').innerHTML = Meta.articles[14].title;
                        document.querySelector('.meta-site-name-two').innerHTML = Meta.articles[14].source.name;
                        document.querySelector('.meta-news-link-two').href = Meta.articles[14].url;
                        document.querySelector('.meta-title-three').innerHTML = Meta.articles[4].title;
                        document.querySelector('.meta-site-name-three').innerHTML = Meta.articles[4].source.name;
                        document.querySelector('.meta-news-link-three').href = Meta.articles[4].url;

                        

                } catch(error) {
                        console.error(error.message)

        }
}
        
                        NewsData()
           
 
    


        











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



