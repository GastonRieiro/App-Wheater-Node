const axios = require('axios');

const argv = require('./config/yargs').argv
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima')

const encodedUrl = encodeURI(argv.direccion);

const getInfo = async(direccion) => {


    try {
        const coords = await getLugarLatLng(direccion);
        const temp = await getClima(coords)
        return `El clima de ${coords.direc} es de ${Math.round((Number(temp) - 273.15)*100)/100} ºC`
    } catch (e) {
        throw e;
    }


    //Con Promesas(tengo que sacar el async)
    // return new Promise((resolve, reject) => {
    //     getLugarLatLng(direccion)
    //         .then(resp =>
    //             getClima(resp)
    //             .then(resp2 => resolve(`El clima de ${resp.direc} es de ${Math.round((Number(resp2) - 273.15)*100)/100} ºC`))
    //             .catch(e => reject(e))
    //         )
    //         .catch(e => reject(e));
    // })

}

getInfo(encodedUrl)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));