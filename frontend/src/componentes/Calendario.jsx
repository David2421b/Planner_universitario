import React from 'react';
import './Calendario.css';               
import logoplaner from '../assets/logoplaner.png';   

const Calendario = () => {
  return (
    <div className="app-container">

      {/* Contenido principal */}
      <main className="main-content">
        <section className="calendar-section">
          <div className="calendar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l2.25 2.25L15 12" />
            </svg>
          </div>
          <h2>Calendario</h2>
          <div className="dates">
            <div className="date-box">05/09/2025</div>
            <div className="date-box">12/09/2025</div>
            <div className="date-box">23/10/2025</div>
          </div>
          <p className="calendar-text">Actividad más cercana en el calendario</p>
        </section>
      </main>
    
    </div>
  );
};

export default Calendario;

