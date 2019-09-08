const request = require('request');

request('https://api.worldtradingdata.com/api/v1/stock?symbol=AAPL,MSFT,HSBA.L&api_token=pFeLPYkfvXHhfcF5YG3M6LNYueU2mlizlL2s57b3Z97SbJsifvzhQo1pcY5w', {json: true}, (err, res, body) => {
    if(err){
        console.log(err);
    }else{
        console.log(body);
    }
});