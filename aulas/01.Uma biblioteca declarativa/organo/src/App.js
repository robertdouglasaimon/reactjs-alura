import Banner from './Componentes/Banner';
import CampoTexto from './Componentes/CampoTexto/index.js';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label='Nome' placeholder='Digite seu nome'/>
      <CampoTexto label='Cargo' placeholder='Digite seu cargo'/>
      <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem'/>
      
    </div>
  );
}

export default App;
