import  Swal from 'sweetalert2';
import Axios from "axios";

import { firebase, googleAuthProvider } from './firebase-config'

export const startGoogleLogin = ( setCookies ) => {
        firebase.auth()
            .signInWithPopup( googleAuthProvider )
                .then( ({ user }) => {
                    const data = {
                        id: user.uid,
                        name: user.displayName,
                        image: user.photoURL,
                        status: true,
                        isLogged: true,
                        isadmin: false,
                    };
                    setCookies('c_user', data, { path:'/', expires: new Date(Date.now()+ 1*60*24*365*365*365) })
                });    
}