import React from "react";
import "./css/Barradebusqueda.css";



const Barradebusqueda = () => {


    const Botonbuscar = () => {

        console.log('Hola mundo');
    }


    return (
      <div className="search-bar-container">
        <input
           
          type="text"
          className="search-bar-input"
          placeholder="Buscar..."
        />
        <button onClick={Botonbuscar} className="search-bar-button" >Buscar</button>
      </div>
    );
  };
  
  export default Barradebusqueda;
