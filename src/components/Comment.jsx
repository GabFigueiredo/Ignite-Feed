import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useState } from 'react';

export function Comment({ authorImageURL, authorName, publishedAt, content, onDeleteComment }) {
    const [likes, setLikes] = useState(0)

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
            { locale: ptBR}
        );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,  {
        locale: ptBR,
        addSuffix: true,
    })

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeAction() {
        setLikes(likes + 1)
    }

    return (
            <div className={styles.comment}>
                <div>
                    <img src={authorImageURL}></img>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorInfo}>
                                <p>{authorName}</p>
                                <time 
                                    title={publishedDateFormatted}
                                    dateTime={publishedAt}>
                                        {publishedDateRelativeToNow}
                                </time>
                            </div>
                            <div className={styles.image}>
                                <Trash 
                                    size={24}
                                    onClick={handleDeleteComment}
                                />
                            </div>
                        </header>
                        <a>{content}</a>
                    </div>
                    <footer className={styles.footer}>
                        <ThumbsUp size={20}></ThumbsUp>
                        <button onClick={handleLikeAction}>Curtir</button>
                        <p>{likes}</p>
                    </footer>
                </div>
            </div>
        )
}  