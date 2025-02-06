import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
            <div className={styles.comment}>
                <div>
                    <img src='https://github.com/GabFigueiredo.png'></img>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorInfo}>
                                <p>Gabriel Figueiredo</p>
                                <time dateTime='2024-04-02 17:09:47'>Publicado há 3h atrás</time>
                            </div>
                            <Trash size={24}></Trash>
                        </header>
                        <p>💜💜</p>
                    </div>
                    <footer className={styles.footer}>
                        <ThumbsUp size={20}></ThumbsUp>
                        <p>Curtir</p>
                        <p>33</p>
                    </footer>
                </div>
            </div>
        )
}  