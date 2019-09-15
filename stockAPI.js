const request = require('sync-request');

var stockSymbols = ["AAPL"];
 
function getStockData(stockSymbolsArray){
    var str = "";
    stockSymbolsArray.forEach(symbol => {
        str += symbol + ",";
    });
    var newStr = str.slice(0, str.length-1);
   
    try {
        var res;
        res = request('GET','https://api.worldtradingdata.com/api/v1/stock?symbol='+ newStr +'&api_token=pFeLPYkfvXHhfcF5YG3M6LNYueU2mlizlL2s57b3Z97SbJsifvzhQo1pcY5w',{json: true});
        var res2 = res.getBody().toString();
        var res3 = JSON.parse(res2);
        return res3;
    } catch (error) {
        throw error;
    }
}

// console.log(getStockData(stockSymbols));
module.exports.getStockData = getStockData;
module.exports.stockSymbols = stockSymbols;





