import React from "react";
import appfirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(appfirebase)

const HomeProfesor = ({ correousuario }) => {
  return (
    <div>
      <h2 className="text-center">
        Bienvenido Profesor {correousuario}
      </h2>
      <p className="text-center">Aquí puedes gestionar tus clases, asignar tareas y ver reportes.</p>

      <div className="text-center">
        <button className="btn btn-primary" onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default HomeProfesor
