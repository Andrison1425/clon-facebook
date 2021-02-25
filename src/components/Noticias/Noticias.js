import React from 'react'
import AgregarNoticia from './AgregarNoticia'
import { HistoriaEspe } from './Historia'
import Noticia from './Noticia'

const Noticias = () => {
    return (
        <div className="noticias__main">
            <div className="historia__cont">
                <HistoriaEspe />
            </div>

            <AgregarNoticia />

            <Noticia />
        </div>
    )
}

export default Noticias
