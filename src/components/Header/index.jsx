import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { BiMoon } from 'react-icons/bi'
import { FiSun } from 'react-icons/fi'

export default function Header({ mode, setMode }) {

    return (
        <>
            <div className={`${styles.headerContainer} ${mode ? 'bg-light' : 'bg-dark'}`}>
                <div className={styles.header}>
                    <span className={`${styles.logo} ${mode ? 'text-primary-light' : 'text-primary-dark'}`}>Marco Aurélio</span>
                    <div>
                        <span className={mode ? 'text-primary-light text-underline-light' : 'text-primary-dark text-underline-dark'}>About</span>
                        <span className={mode ? 'text-primary-light text-underline-light' : 'text-primary-dark text-underline-dark'}>Projects</span>
                        <span className={mode ? 'text-primary-light text-underline-light' : 'text-primary-dark text-underline-dark'}>Abilities</span>
                        <span className={mode ? 'text-primary-light text-underline-light' : 'text-primary-dark text-underline-dark'}>Contact</span>
                        {mode ? (
                            <FiSun size={25} onClick={() => setMode(!mode)} className={mode ? 'text-primary-light' : 'text-primary-dark'} />
                        ) : (
                            <BiMoon size={25} onClick={() => setMode(!mode)} className={mode ? 'text-primary-light' : 'text-primary-dark'} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}