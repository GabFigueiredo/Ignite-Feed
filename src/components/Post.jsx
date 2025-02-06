import React, { useState } from 'react';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const templateComments = [
    {
        authorImageURL: 'https://github.com/GabFigueiredo.png',
        authorName: 'Gabriel Figueiredo',
        publishedAt: '2025-02-06 12:00:00',
        content: "Hearts" 
    },
    {
        authorImageURL: 'https://github.com/diego3g.png',
        authorName: 'Diego Fernandes',
        publishedAt: '2024-01-07 12:00:00',
        content: "Boa! 👏" 
    }
]

export function Post({ authorImageURL, authorName, authorRole, publishedAt, content }) {
    const [comments, setComments] = useState(templateComments);
    const [newMessage, setNewMessage] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR}
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
         locale: ptBR,
         addSuffix: true, 
        });

    function handleCreateNewMessage(event) {
        event.preventDefault()
        setComments([...comments, {
            authorImageURL: 'https://github.com/GabFigueiredo.png',
            authorName: 'Gabriel Figueiredo',
            publishedAt: '2025-02-06 12:00:00',
            content: newMessage
        }])
        setNewMessage('')
    }

    function deleteComment(commentToDelete) {
        const updatedComments = comments.filter(comment => comment.content !== commentToDelete);
        setComments(updatedComments)
    }

    function handleMessageChange(event) {
        event.target.setCustomValidity('')
        setNewMessage(event.target.value);
    }

    function handleCreateNewMessageInvalid(event) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    const isNewCommentEmpty = newMessage.length === 0
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.userInfo}>
                    <img className={styles.avatar} src={authorImageURL} alt={`${authorName}'s profile`}></img>
                    <div className={styles.author}>
                        <strong>{authorName}</strong>
                        <span>{authorRole}</span>
                    </div>
                </div>
                    <time
                        title={publishedDateFormatted}
                        dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}
                    </time>
            </header>
            <div className={styles.content}>
                {content.map((item, index) => {
                    if (item.type === 'paragraph') {
                        return <p key={index}>{item.content}</p>
                    }
                    if (item.type === 'link') {
                        return <a key={index} href=''>{item.content}</a>
                    }
                })}
            </div>

            <footer className={styles.footer}>
                <strong>Deixe seu feedback</strong>
                <form onSubmit={handleCreateNewMessage}> 
                    <textarea
                        value={newMessage}
                        onChange={handleMessageChange}
                        placeholder='Nossa, adorei o projeto!'
                        onInvalid={handleCreateNewMessageInvalid}
                        required>
                    </textarea>
                    <div className={styles.wrapper}>
                        <button
                            type='submit'
                            disabled={isNewCommentEmpty}
                            >Comentar
                        </button>
                    </div>
                </form>
            </footer>
            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return (
                        <Comment
                            key={index}
                            authorImageURL={comment.authorImageURL}
                            authorName={comment.authorName}
                            publishedAt={comment.publishedAt}
                            content={comment.content}
                            onDeleteComment={deleteComment}
                            
                        />
                    )
                })}
            </div>
        </article>
    )
}