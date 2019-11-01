const request = require('sync-request');

var stocks = [];
 
function getStockData(stocksSymbolArray){
    const symbols = stocksSymbolArray.join(',');

    try {
        var res;
        res = request('GET','https://api.worldtradingdata.com/api/v1/stock?symbol='+ symbols +'&api_token=pFeLPYkfvXHhfcF5YG3M6LNYueU2mlizlL2s57b3Z97SbJsifvzhQo1pcY5w',{json: true});
        var res2 = res.getBody().toString();
        var res3 = JSON.parse(res2);
        return res3['data'];
    } catch (error) {
        throw error;
    }
}

module.exports.getStockData = getStockData;
module.exports.stocks = stocks;





