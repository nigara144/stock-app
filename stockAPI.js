const request = require('request');

var stockSymbols = ["AAPL", "MSFT","HSBA.L"];
 
function getStockData(stockSymbolsArray){
    var str = "";
    stockSymbolsArray.forEach(symbol => {
        str += symbol + ",";
    });
    var newStr = str.slice(0, str.length-1);

    request('https://api.worldtradingdata.com/api/v1/stock?symbol='+ newStr +'&api_token=pFeLPYkfvXHhfcF5YG3M6LNYueU2mlizlL2s57b3Z97SbJsifvzhQo1pcY5w', {json: true}, (err, res, body) => {
        if(err){
            console.log(err);
        }else{
            return body;
        }
    });
}

getStockData(stockSymbols);




