const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        //extrae los datos mas importantes de la API
        var data = response.data.bpi
        var resultado = [
                    `${data.USD.code} `+` $ ${data.USD.rate}`,
                    `${data.EUR.code} `+` € ${data.EUR.rate}`,
                    `GBP `+`£ ${data.GBP.rate}`,
                ]
        
       console.log("El precio de BTC actualmente es de: ")
       resultado.forEach(datos =>console.log(datos))
        

})