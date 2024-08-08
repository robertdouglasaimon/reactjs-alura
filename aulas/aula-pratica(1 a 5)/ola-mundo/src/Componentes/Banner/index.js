import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Robert Douglas, Estudante de Front-end da Alura. Aqui compartilho várias coisas, de aprendizados, desenhos e pensamentos até hobbies e telas aleatórias de zeramento ahahah'. Vamos nessa!
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido} 
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Robert'
                />
            </div>
        </div>
    )
}

export default Banner;