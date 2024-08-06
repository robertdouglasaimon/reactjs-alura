import Inicio from "./Componentes/Inicio";
import SobreMim from "./Componentes/SobreMim";

const pagina = window.location.pathname === '/' ? 
<Inicio/>:
<SobreMim/>

function App() {
  return pagina;
}

export default App;
