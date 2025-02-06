import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'
import styles from './main.module.css'
import { Post } from './components/Post'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className={styles.wrapper}>
      <SideBar />
      <Post></Post>
    </div>
  </StrictMode>,
)
