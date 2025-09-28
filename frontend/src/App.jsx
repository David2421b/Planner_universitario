import { useState } from 'react'

import './App.css'

//importar los modulos de firebase
import appfirebase from '../src/credenciales'
//esado de la autenticacion del registro
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appfirebase)

// importamos los componentes
import Login from '../src/componentes/Login'
import Home from '../src/componentes/Home'

import'./App.css'

function App() {
  
  const [usuario, setUsuario] = useState(null)
//estado de la autenticacion
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  return (
  <div>
    {usuario ? <Home correousuario = {usuario.email}/> : <Login/>}


  </div>
  )
}

export default App
