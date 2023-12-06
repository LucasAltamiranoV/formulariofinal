import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';
import './componentes/campo-registro.js'
import CampoRegistro from './componentes/campo-registro.js';

function App() {

  const handleRecaptchaChange = (value) => {
    console.log("Recaptcha value:", value);
    // Puedes hacer algo con el valor del reCAPTCHA
  };

  return (
    <div className="App">

      <head>
      <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    async defer>
</script>
      </head>

      <div className='contenedor-principal'>
        
        <div className='contenedor-titulo'>
          <h1>FORMULARIO DE REGISTRO</h1>
        </div>
        
        <div className='contenedor-registro'>
          <CampoRegistro
          nombreRegistro="Nombre"
          tipoLabel="text"/>

          <CampoRegistro
          nombreRegistro="Apellido"
          tipoLabel="text"/>

          <CampoRegistro
          nombreRegistro="RUT(sin puntos ni guion)"
          tipoLabel="text"/>

          <CampoRegistro
          nombreRegistro="Direccion"
          tipoLabel="text"/>

          <CampoRegistro
          nombreRegistro="Edad"
          tipoLabel="number"/>

          <CampoRegistro
          nombreRegistro="Email"
          tipoLabel="email"/>

        <div className='recaptcha1'>
        <ReCAPTCHA
            sitekey="6LeRUycpAAAAAORJcmKM1faooVMI_EX_V0cbBQXF"
            onChange={handleRecaptchaChange}
          />
        </div>

          <div className='boton-registro'>
            <button className='boton-confirmar-registro'>
              CONFIRMAR REGISTRO
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
