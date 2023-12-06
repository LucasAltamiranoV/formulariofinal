import React from "react";
import '../hoja-de-estilos/campo-registro.css';

function CampoRegistro (props){
    return (
        <div className="contenedor-principal-campos">
            <label htmlFor="inputGenerico" className="labelTotal">{props.nombreRegistro}</label>
            <input type={props.tipoLabel} id="input1"/>
        </div>
    )
}

export default CampoRegistro;