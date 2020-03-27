const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad par obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;

    } catch (e) {

        return `No se pudo determinar el clima en ${direccion}`;

    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));



// let location = resp.data.Results[0];
// let coors = location.geometry.location;

// console.log('Direccion:', location.name);
// console.log('Latitud:', location.lat);
// console.log('Longitud:', location.lon);





// clima.getClima(9.580000, -69.199997)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));