import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'
import styles from './main.module.css'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    authorName: 'Gabriel Figueiredo',
    authorRole: 'Front-end Developer',
    authorImageURL: 'https://github.com/GabFigueiredo.png',
    publishedAt: new Date('2023-05-02 19:09:47'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ]
  },
  {
    id: 2,
    authorName: 'Diego Fernandes',
    authorRole: 'CTO at @Rocketseat',
    authorImageURL: 'https://github.com/diego3g.png',
    publishedAt: new Date('2023-05-02 19:09:47'),
    content: [
      {type: 'paragraph', content: 'Opa 👋'},
      {type: 'paragraph', content: 'Que projeto ruim amigo! 🚀'},
      {type: 'link', content: '👉 rocketseat.com.br'},
    ]
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className={styles.wrapper}>
      <SideBar />
      <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              authorImageURL={post.authorImageURL}
              authorName={post.authorName}
              authorRole={post.authorRole}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          )
        })}
      </main>
    </div>
  </StrictMode>,
)
