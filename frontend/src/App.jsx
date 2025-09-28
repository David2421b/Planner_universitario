import { useState } from 'react'

import './App.css'

//importar los modulos de firebase
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

// importamos los componentes
import Login from '../src/componentes/Login'
import Home from '../src/componentes/Home'

import'./App.css'

function App() {
  
  const [usuario, setUsuario] = useState(null)

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
