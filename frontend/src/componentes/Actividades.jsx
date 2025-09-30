import React, { useState } from "react";
import "./Actividades.css";
import { ClipboardList, Eye, Edit3, Mic, CheckCircle } from "lucide-react";

const Actividades = () => {
  const [filtro, setFiltro] = useState("Proximas");

  return (
    <div className="contenedor-actividades">
      {/* Icono principal */}
      <div className="icono-principal">
        <ClipboardList size={90} />
      </div>

      {/* Título */}
      <h1 className="titulo-actividades">Actividades</h1>

      {/* Botones de filtro */}
      <div className="filtros">
        {["Todas", "Próximas", "Completas", "Vencidas"].map((nombre) => (
          <button
            key={nombre}
            className={`boton-filtro ${filtro === nombre ? "activo" : ""}`}
            onClick={() => setFiltro(nombre)}
          >
            {nombre}
          </button>
        ))}
      </div>

      {/* Tarjeta de actividad */}
      <div className="tarjeta-actividad">
        <div className="info-actividad">
          <h3 className="titulo-tarea">Exposición HdeU</h3>
          <p className="detalle-tarea">Tarea Fundamentos Diseño</p>
        </div>
        <div className="acciones">
          <Eye size={18} className="icono" title="Ver" />
          <Edit3 size={18} className="icono" title="Editar" />
          <Mic size={18} className="icono" title="Grabar" />
          <div className="check">
            <input type="checkbox" id="deacuerdo" />
            <label htmlFor="deacuerdo">De acuerdo</label>
          </div>
          <button className="boton-proxima">Próxima</button>
        </div>
      </div>
    </div>
  );
};

export default Actividades;

