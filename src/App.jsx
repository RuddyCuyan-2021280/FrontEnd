import { useState } from 'react'
import '../src/assets/AppStyles.css'

function App() {


  return (
    <>
      <div className="form-register">
        <h4>Evento de poesía Universidad de Guatemala</h4>
        <input className="controls" type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre" />
        <input className="controls" type="text" name="Carnet" id="carnet" placeholder="Ingrese su Carnet" />
        <input className="controls" type="text" name="Direccion" id="direccion" placeholder="Ingrese su Direccion" />
        <input className="controls" type="" name="Genero" id="genero" placeholder="Ingrese su Genero (Hombre/Mujer)" />
        <input className="controls" type="number" name="telefono" id="correo" placeholder="Ingrese su numero telefonico" />
        <h5 className='fecha'>Ingrese su  fecha de nacimiento</h5>
        <input className="controlsDate" type="date" name="Fecha de Nacimiento" id="fechaNacimiento" placeholder="Ingrese su Fecha de nacimiento" />
        <input className="controls" type="text" name="carrera" id="orreo" placeholder="Ingrese su Carrera" />
        <input className="controls" type="" name="Genero de poesia" id="correo" placeholder="Ingrese su Genero de poesia" />
        <input className="botons" type="submit" value="Enviar" />
      </div>
    </>
  )
}                                    

export default App
