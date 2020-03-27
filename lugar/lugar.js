const axios = require('axios');

const getLugarLatLng = async(direccion) => { // Cuando veamos un async, regresa una promesa

    const encodedURL = encodeURI(direccion); // Escapar la direccion 

    const instance = await axios.create({

        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { "x-rapidapi-key": "0c99d4a18cmshad8faaace027d72p140f69jsn72d658ffd6e9" }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}




//     instance.get()
//         .then(resp => {
//             // console.log(JSON.stringify(resp.data, undefined, 2)); 
//             // console.log(resp.data.Results[0]); // Imprimir solo la data, y el resultado en la posicion 0
//             let location = resp.data.Results[0];
//             let coors = location.geometry.location;

//             console.log('Direccion:', location.name);
//             console.log('Latitud:', location.lat);
//             console.log('Longitud:', location.lon);

//         })

//     .catch(err => {
//         console.log(`No hay resultados para la ciudad ${direccion}`, err);
//     });
// }

// module.exports = {
//     getLugarLatLng
// }