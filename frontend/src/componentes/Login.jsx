import React, { useState } from 'react'
import imagen from '../assets/logoplaner.png'
import appfirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

import { getFirestore,doc, setDoc } from 'firebase/firestore'
const auth= getAuth(appfirebase)
const db= getFirestore(appfirebase)


const Login = ({setUsuario, setRol}) => {

    const[registrando, setRegistrando]= useState(false)
    const funAutenticacion= async(e) =>{
        e.preventDefault()
        const correo= e.target.email.value
        const contraseña= e.target.password.value
       
        
        if (registrando) {
            const nombre = e.target.nombre.value;
            const rol=  e.target.rol.value;
            
            
            try {
                const userCredential= await createUserWithEmailAndPassword(auth, correo, contraseña)
                const user= userCredential.user

                await setDoc(doc(db, "usuarios", user.uid), {
                    email: correo,
                    rol: rol,
                    nombre : nombre
                })
                setUsuario(user)
                setRol(rol)
                
                alert("Usuario registrado como: " + rol )
            } catch(error) {
                console.error(error)
                alert(error.message)
            }
        }
        else{
            try {await signInWithEmailAndPassword(auth, correo, contraseña)
            }  catch (error) {
                console.error(error)
                alert("El correo o la contraseña son incorrectos")

            }
                
        }

    }
    console.log("Estado registrando:", registrando)

    
    return (
        <div className='container-login'> 
            <div className="padre">
                <div className="card card-body shadow-lg">
                    {/* Aquí va tu formulario después */}
                    <img src={imagen} alt='' className='estilo-foto-usuario'/>
                        <form onSubmit={funAutenticacion}>
                            <input type="text" placeholder='Ingresar Email'  className='cajatexto' id='email' />
                            <input type="password" placeholder='Ingresar contraseña' className='cajatexto' id='password' />
                            {registrando && ( <>
                                <input id='nombre' type='text' placeholder='Ingresa tu nombre' className='cajatexto'></input>
                                <select id='rol' className='cajatextorol'>
                                    <option value="">Selecciona tu rol</option>
                                    <option value="profesor">Profesor</option>
                                    <option value="estudiante">Estudiante</option>
                                </select>
                                </>
                                )}
                            <button className='btnform'>{registrando ? "Registrate" : "Inicia sesion"}</button>
                        </form>
                        <h4  className='texto'> {registrando ? "Si ya tienes cuenta" : "¿No tienes cuenta?"}
                            <button className='btnswicth' onClick={()=> setRegistrando(!registrando)}> 
                                {registrando ? "Inicia sesion" : "Registrate"}</button></h4>
        
                </div>        
        </div>
        </div>
    ) 
}

export default Login