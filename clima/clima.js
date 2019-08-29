const axios = require('axios');

const getClima = async(ciudad) => {

    try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ciudad.lat}&lon=${ciudad.lon}&appid=c87db3143119381b3b5eba33a3affcc4`)
        return resp.data.main.temp;
    } catch (e) {
        throw new Error(`No se pudo determinar el clima de ${ciudad.direc}`)
    }
}

module.exports = {
    getClima
}