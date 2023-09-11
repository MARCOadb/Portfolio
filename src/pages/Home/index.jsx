import styles from './styles.module.scss'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import profilePic from '../../assets/pics/picture.png'

export default function Home() {
    const [lightMode, setLightMode] = useState(false)

    return (
        <div className={`page ${lightMode ? 'bg-light' : 'bg-dark'}`}>
            <Header mode={lightMode} setMode={setLightMode} />
            <section className={styles.firstSection}>
                <div className={styles.picture}></div>
                <span className={`${styles.title} ${lightMode ? 'text-dark' : 'text-light'}`}>
                    Hi! My name is <span style={{ fontFamily: 'Imbue, serif' }}>Marco Aurélio </span>
                    and I'm a React Front-End developer.
                </span>
            </section>
        </div>
    )
}