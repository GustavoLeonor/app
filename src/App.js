import Inicio from "./inicio";
import Encabezado from "./Encabezado";
import { Routes, Route } from 'react-router-dom'
import Contactos from "./contactos";
import Productos from "./productos";

function App() {
  return (
    <>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/contacto" element={<Contactos/>} />
        <Route path="/productos" element={<Productos/>} />
      </Routes>
      {/* <Inicio /> */}
      {/* <Contactos />
      <Productos /> */}

    </>
  );
}

export default App;
