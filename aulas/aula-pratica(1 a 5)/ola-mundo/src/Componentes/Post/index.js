import styles from './Post.module.css';


const Post = ({ post }) => {
    return (
        <div className={styles.post}>
            <img 
                src={`../../assets/posts/${post.id}/capa.png`} 
                alt='Imagem de capa do post' 
                className={styles.capa}      
            />

            <h2 className={styles.titulo}>{post.titulo}</h2>

            <button className={styles.botaoLer}>Ler</button>
        </div>
    )
};

export default Post;