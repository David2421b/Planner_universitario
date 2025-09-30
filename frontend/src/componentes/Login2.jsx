import React, { useRef } from "react";
import "./Login.css";
import "boxicons/css/boxicons.min.css";
import Main from "./Calendario";

const Login2 = () => {
  const containerRef = useRef(null);

  const handleRegisterClick = () => {
    containerRef.current.classList.add("active");
  };

  const handleLoginClick = () => {
    containerRef.current.classList.remove("active");
  };

  return (
    <div className="container" id="container" ref={containerRef}>
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form>
          <h1>Crear cuenta</h1>
          <div className="social-icons">
            <a href="#" className="icons"><i className='bx bxl-google'></i></a>
            <a href="#" className="icons"><i className='bx bxl-facebook'></i></a>
            <a href="#" className="icons"><i className='bx bxl-github'></i></a>
          </div>
          <span>Registrar E-mail</span>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Ingresar E-mail" />
          <input type="password" placeholder="Ingresar contraseña" />
          <button>Ingresar</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form>
          <h1>Iniciar sesion</h1>
          <div className="social-icons">
            <a href="#" className="icons"><i className='bx bxl-google'></i></a>
            <a href="#" className="icons"><i className='bx bxl-facebook'></i></a>
            <a href="#" className="icons"><i className='bx bxl-github'></i></a>
          </div>
          <input type="email" placeholder="Ingresar E-mail" />
          <input type="password" placeholder="Ingresar contraseña" />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button>Iniciar</button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Bienvenido</h1>
            <p>Incia sesion con tu Email & Contraseña</p>
            <button className="hidden" id="login" onClick={handleLoginClick}>
              Iniciar Sesión
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Bienvenido</h1>
            <p>Unete a nuestro planner Universitario para mejorar tu redimiento academico</p>
            <button className="hidden" id="register" onClick={handleRegisterClick}>
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login2;

