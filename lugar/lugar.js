const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
        timeout: 1000,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "1fd5a74d51msh2a505303ababe12p1ecc06jsn183843aef8e0"
        }
    });


    const resp = await instance.get();
    const data = resp.data.Results;
    if (data.length === 0) {
        direccion = decodeURI(direccion); // direccion la recibo como, por ejemplo, New%20York. Con decodeURI lo convierto a New York
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const direc = data[0].name;
    const lat = data[0].lat
    const lon = data[0].lon

    return { direc, lat, lon }
}




module.exports = {
    getLugarLatLng,
}