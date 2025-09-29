import React, { useState } from 'react'
import imagen from '../assets/logoplaner.png'
import imagenlogousuario from '../assets/logousuario.png'
import appfirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const auth= getAuth(appfirebase)


const Login = () => {

    const[registrando, setRegistrando]= useState(false)
    const funAutenticacion= async(e) =>{
        e.preventDefault()
        const correo= e.target.email.value;
        const contraseña= e.target.password.value;
        console.log(correo)
        console.log(contraseña)
        
        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña)
            } catch(error) {
                alert("Asegurese que la contraseña tenga mas de 8 caracteres")
            }
        }
        else{
            try {await signInWithEmailAndPassword(auth, correo, contraseña)

            }  catch (error) {
                alert("El correo o la contraseña son incorrectos")

            }
                
        }


    }
    
    return (
        <div className='container'> 
            <div className="row">
               {/*columna de formulario*/}
                <div className="col-md-4">
                    {/* Aquí va tu formulario después */}
                    <div className="padre">
                        <div className="card card-body shadow-lg" >
                            <img src={imagenlogousuario} alt='' className='estilo-foto-usuario'/>
                            <form onSubmit={funAutenticacion}>
                                <input type="text" placeholder='Ingresar Email'  className='cajatexto' id='email' />
                                <input type="password" placeholder='Ingresar contraseña' className='cajatexto' id='password' />
                                <button className='btnform'>{registrando ? "Registrate" : "Inicia sesion"}</button>
                            </form>
                            <h4  className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className='btnswicth' onClick={()=> setRegistrando(!registrando)}> {registrando ? "Inicia sesion" : "Registrate"}</button></h4>
                        </div>
                    </div>
                

                </div>

        
            {/*columna mas grande*/ }
            <div className="col-md-8">
                <img src={imagen} alt="" className='tamaño-imagen' />

            </div>
        </div>
        </div>
    ) 
}

export default Login