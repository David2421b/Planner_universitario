import React from "react";
import appfirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(appfirebase)

const HomeEstudiante = ({ correousuario }) => {
  return (
    <div>
      <h2 className="text-center">
        Bienvenido Estudiante {correousuario}
      </h2>
      <p className="text-center">Aquí puedes ver tus materias, tus tareas pendientes y notas.</p>

      <div className="text-center">
        <button className="btn btn-primary" onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default HomeEstudiante