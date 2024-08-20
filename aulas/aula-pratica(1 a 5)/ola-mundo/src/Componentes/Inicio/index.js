import styles from './Inicio.module.css'

import posts from '../../assets/json/posts.json'
import Post from '../Post';

const Inicio = () => {
    return (
        <main>
            <ul className={styles.posts}>
                {posts.map((post) =>  (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Inicio;