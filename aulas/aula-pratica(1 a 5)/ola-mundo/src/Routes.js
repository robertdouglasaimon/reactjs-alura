import { BrowserRouter, Routes,  Route } from "react-router-dom"
import Inicio from "./Componentes/Inicio";
import SobreMim from "./Componentes/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "./Componentes/Rodape";
import PaginaPadrao from "./Componentes/PaginaPadrao";


function AppRoutes(props) {
  return (
    <BrowserRouter>
      <Menu/>
      
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path='/' element={<Inicio/>} />
          <Route path='/sobremim' element={<SobreMim/>} />
        </Route>

        <Route path='*' element={<div>Página não encontrada.</div>} />
      </Routes>


      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
