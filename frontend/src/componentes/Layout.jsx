import React from 'react';
import './Layout.css';
import logoplaner from '../assets/logoplaner.png';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      {/* Barra lateral fija */}
      <aside className="sidebar">
        <img src={logoplaner} alt="logo Planer" />
        
        <nav className="menu">
          <Link to="/">Calendario</Link>
          <Link to="/Actividades">Actividades</Link>
          <Link to="#">Progreso</Link>
          <Link to="#">Notificaciones</Link>
          <Link to="#">Configuración</Link>
        </nav>
      </aside>

      {/* Contenido variable */}
      <main className="main-content">
        {children}
      </main>

      {/* Panel de estudiante fijo */}
      <aside className="student-panel">
        <div className="student-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ccc" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
        <h3>Estudiante</h3>
        <div className="panel-box">
          <h4>Actividades próximas</h4>
          <p>Aquí aparecerán tus próximas tareas</p>
        </div>
        <div className="panel-box">
          <h4>Progreso</h4>
          <p>¡Vas muy bien! 😎</p>
        </div>
      </aside>
    </div>
  );
};

export default Layout;

