import  Swal from 'sweetalert2';
import Axios from "axios";

const BaseUrl = "http://localhost:3000/";


export const startLoginEmailPassword = async( data, url, setCookies ) => {
        await Axios.get(BaseUrl+url, data).then( resp => {       
        let response = resp.data;
        response.isLogged = true;
        response.tipousaurio !== 2 ? response.isadmin = false : response.isadmin = true;
        setCookies('c_user', response, { path:'/', expires: new Date(Date.now()+ 1*60*24*365*365*365) })
    }).catch(e => {
        Swal.fire('Error', e.message, 'error');
    });
}
//Juegos
export const GetJuegos = async (url) => {
    let response;
    await Axios.get(BaseUrl+url).then( resp => {
        response = resp.data.games;
    }).catch( e => {
        Swal.fire('Error', e.message, 'error');
    });
    return response;
}
//Actualizar 
export const UpdateGame = async (data, url) => {
    let response;
    await Axios.put(BaseUrl+url, data).then( resp => {
        Swal.fire('Haz agregado a favoritos', resp, 'Ok');;
    }).catch( e => {
        console.log(e.response)
        Swal.fire('Error', e.message, 'error');
    });
}
//Nuevo Juego
export const CreateGame = async (data, url) => {
    let response;
    await Axios.post(BaseUrl+url, data).then( resp => {
        response = resp.data;
        Swal.fire('Haz agregado un nuevo juego', resp, 'Ok');;
    }).catch( e => {
        console.log(e.response)
        Swal.fire('Ocurrio un error', e.message, 'error');
    });


    return response;
}

