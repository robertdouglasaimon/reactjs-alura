import './banner.css'; // Teste com o caminho absoluto

import FotoBanner from '../Rodape/imagens/banner.png';

const Banner = (props) => {
    return (
        <header className="cabecalho">
            <img src={FotoBanner} alt='Logo do Organo'/>
        </header>
    )
}

export default Banner;