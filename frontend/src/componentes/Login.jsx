import React from 'react'
import imagen from '../assets/logoplaner.png'

const Login = () => {
    return (
        <div className='container'> 
            <div className="row">
               {/*columna de formulario*/}
                <div className="col-md-4">
                    {/* Aquí va tu formulario después */}
                    <div className="padre">
                        <div className="card card-body">
                            <form >
                                <input type="text" placeholder='Ingresar Email' />
                                <input type="password" placeholder='Ingresar contraseña' />
                                <button>registrarse</button>
                            </form>
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