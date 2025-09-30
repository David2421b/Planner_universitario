import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout';
import Calendario from './componentes/Calendario';
import Actividades from './componentes/Actividades';

function Vistas() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Calendario />} />
          <Route path="/Actividades" element={<Actividades />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default Vistas;
