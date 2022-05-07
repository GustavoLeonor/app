import React from 'react';

function Contactos() {
  return (
    <>
        <form>
            <h1>Contacto</h1>

            <label form="correo">Correo electronico</label><br/>
            <input type="email" id="correo"/>
            <br/><br/>
            <label form="mensaje">Mensaje</label><br/>
            <textarea id='mensaje'></textarea>
            <br/><br/>
            <input type="submit" value="Enviar"/>
        </form>
    </>
  )
}

export default Contactos