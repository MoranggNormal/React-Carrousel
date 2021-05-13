import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'


const Contato = () => {
    return (
        <section className={`${styles.contato} animeleft`}>
            <Head title="Contato" description="Página de contatos." />
            <img src={foto} alt="contatos"/>

            <div>
                <h2>Entre em contato:</h2>

                <ul className={styles.dados}>
                    <li>peixotoeuller500@gmail.com</li>
                    <li>(81) 9 8743-0455</li>
                    <li>Rua abrakadabra</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato
