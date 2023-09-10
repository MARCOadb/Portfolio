import styles from './styles.module.scss'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export default function Home() {
    const [lightMode, setLightMode] = useState(false)

    return (
        <div className={`page ${lightMode ? 'bg-light' : 'bg-dark'}`}>
            <Header mode={lightMode} setMode={setLightMode} />
            <section>
                <span className={lightMode ? 'text-dark' : 'text-light'}>página hooooomeeeee</span>
            </section>
        </div>
    )
}