import { BrowserRouter, Routes,  Route } from "react-router-dom"
import Inicio from "./Componentes/Inicio";
import SobreMim from "./Componentes/SobreMim";
import Menu from "./Componentes/Menu";


function AppRoutes(props) {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/sobremim' element={<SobreMim/>} />
        <Route path='*' element={<div>Página não encontrada.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
