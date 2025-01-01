import React from "react";
import "./css/Barradebusqueda.css";



const Barradebusqueda = () => {
    return (
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar-input"
          placeholder="Buscar..."
        />
        <button className="search-bar-button">Buscar</button>
      </div>
    );
  };
  
  export default Barradebusqueda;
