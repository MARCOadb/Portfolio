import styles from './styles.module.scss'

export default function Colors() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.box} style={{ background: '#aeff00' }}></div>
                <div className={styles.box} style={{ background: '#edbb6c' }}></div>
                <div className={styles.box} style={{ background: '#58c689' }}></div>
                <div className={styles.box} style={{ background: '#02231c' }}></div>
                <div className={styles.box} style={{ background: '#00fd8f' }}></div>
                <div className={styles.box} style={{ background: '#85c300' }}></div>
                <div className={styles.box} style={{ background: 'linear-gradient(55deg, #43ea80, #38f8d4 120%)' }}></div>
                <div className={styles.box} style={{ background: '#080c1c' }}></div>
                <div className={styles.box} style={{ background: '#fffffc' }}></div>
            </div>

            <h1>Marco Aurélio</h1>
        </>
    )
}