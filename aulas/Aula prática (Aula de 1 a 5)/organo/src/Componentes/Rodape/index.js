import facebook from '../Rodape/imagens/fb.png'
import twitter from '../Rodape/imagens/tw.png'
import instagram from '../Rodape/imagens/ig.png'
import logo from '../Rodape/imagens/logo.png'
import './rodape.css'


const Rodape = () => {
    return (
    <footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src={facebook} alt="" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src={twitter} alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src={instagram} alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src={logo} />
       </section>
       <section>
        <p>
            Desenvolvido por Alura.
        </p>
       </section>
    </footer>)
}

export default Rodape