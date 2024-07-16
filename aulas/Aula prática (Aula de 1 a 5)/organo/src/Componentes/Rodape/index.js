import './Rodape.css'
import fbLogo from './imagens/fb.png';
import twLogo from './imagens/tw.png';
import igLogo from './imagens/ig.png';
import logo from './imagens/logo.png';

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://facebook.com' target='_blank' rel="noreferrer">
                            <img src={fbLogo} alt='Facebook' />
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com' target='_blank' rel="noreferrer">
                            <img src={twLogo} alt='Twitter' />
                        </a>
                    </li>
                    <li>
                        <a href='https://instagram.com' target='_blank' rel="noreferrer">
                            <img src={igLogo} alt='Instagram' />
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src={logo} alt='Logo' />
            </section>
            
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
}

export default Rodape;


