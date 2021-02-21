import React from 'react'
import Aside from '../loyaut/aside/Aside'
import AsideRight from '../loyaut/aside2/AsideRight'
import Header from '../loyaut/header/Header'
import Noticias from '../Noticias/Noticias'

const Inicio = () => {
    return (
        <>
            <Header />
            <main>
                <Aside />
                <Noticias />
                
                <AsideRight />
            </main>
        </>
    )
}

export default Inicio
