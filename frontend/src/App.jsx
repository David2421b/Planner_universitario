import { useEffect, useState } from 'react'
import './App.css'

//importar los modulos de firebase
import appfirebase from '../src/credenciales'
//esado de la autenticacion del registro
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
// importamos los componentes
import Login from '../src/componentes/Login'
import HomeProfesor from './componentes/Homeprofesor'
import HomeEstudiante from './componentes/Homestudiante'


const auth = getAuth(appfirebase)
const db = getFirestore(appfirebase)


function App() {
  
  const [usuario, setUsuario] = useState(null)
  const [rol, setRol]= useState(null)
  const [cargando, setCargando]= useState(true)
//estado de la autenticacion
useEffect (() =>{
  const unsubscribe = onAuthStateChanged(auth, async (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
      try{
        const docRef= doc(db, "usuarios", usuarioFirebase.uid)
        const docSnap= await getDoc(docRef)

        if (docSnap.exists()){
          const data= docSnap.data()
          if (data.rol) {
            setRol(data.rol)
        } else { 
          console.warn("El usuario no tiene rol asignado en Firestore")
          setRol(null)
      } 
      } else {
        console.warn("El documento del usuario un no existe en firestore, esperando....")
        setRol(undefined)
    }
    } catch (error){
      console.error("Error obteniendo rol: ", error)
      await signOut(auth)
      setRol(null)
    }
    } else{
      setUsuario(null)
      setRol(null)
    }
    setCargando(false)
  })
  return () => unsubscribe()
},[])


if (cargando){
  return <div>Cargando...</div>
}
if (!usuario) {
  return <Login setUsuario={setUsuario}  setRol={setRol}/>   
}


  if (usuario && rol === undefined) {
    return <div>Cargando tu perfil...</div>
  }

if (rol === "profesor") {
  return <HomeProfesor nombre_usuario={usuario.email} />

} if (rol=== "estudiante"){
  return <HomeEstudiante nombre_usuario={usuario.email} />
} 
if (!rol && !cargando && usuario) {
  return(
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>No se encontró rol asignado</h3>
      <p>Por favor regresa al login e intenta nuevamente.</p>
      <button
        onClick={() => signOut(auth)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#057465",
          color: "white",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          marginTop: "15px"
        }}
        >
          Regresar al Login
        </button>
      </div>
    )
  
} }

export default App
 


