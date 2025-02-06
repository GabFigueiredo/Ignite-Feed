import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.userInfo}>
                    <img className={styles.avatar} src='https://github.com/GabFigueiredo.png'></img>
                    <div className={styles.author}>
                        <strong>Gabriel Figueiredo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                    <time dateTime='2024-04-02 17:09:47'>Publicado há 1h atrás</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>
                    <a href=''>👉 jane.design/doctorcare</a>
                </p>
                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a> {' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>
            <footer className={styles.footer}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Nossa, adorei o projeto!'></textarea>
                <div className={styles.wrapper}>
                    <button type='submit'>Comentar</button>
                </div>
            </footer>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment /> 
            </div>
        </article>
    )
}