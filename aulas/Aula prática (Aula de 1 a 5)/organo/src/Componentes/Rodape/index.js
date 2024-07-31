import twitter from '../Rodape/imagens/tw.png'
import facebook from '../Rodape/imagens/fb.png'
import instagram from '../Rodape/imagens/ig.png'
import logorodape from '../Rodape/imagens/logo.png'
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
       <img src={logorodape} alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por <a href="https://github.com/robertdouglasaimon">Robert Douglas</a> para o curso React + JS da Alura.
        </p>
       </section>
    </footer>)
}

export default Rodape