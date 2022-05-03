const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {

        // sacar los datones que es importante
        var data = response.data.bpi
        var resultado = [
                    `${data.USD.code} `+` $ ${data.USD.rate}`,
                    `${data.EUR.code} `+` € ${data.EUR.rate}`,
                    `GBP `+`£ ${data.GBP.rate}`,
                ]
        
       console.log("El precio de BTC actualmente es de: ")
       resultado.forEach(datos =>console.log(datos))
        

})