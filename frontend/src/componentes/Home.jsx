import React from "react";
 import appfirebase from '../credenciales'
import {getAuth, signOut} from 'firebase/auth'
const auth= getAuth(appfirebase)

const Home = ({correoUsuario}) => {
    return (
        <div>
            <h2 className="text-center"> BIENVENIDO USUARIO {correoUsuario}  <button  className="btn btn-primary"  onClick={() => signOut(auth)}> Logout</button></h2>

        </div>
    )
}

export default Home
