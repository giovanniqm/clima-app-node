const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d94be8cbc05125a9aee705be977c0731`)

    return resp.data.main.temp;


}

module.exports = {
    getClima
}