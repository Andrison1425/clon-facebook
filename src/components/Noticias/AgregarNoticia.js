import React from 'react'
import Imagen from '../../img/img_default.jpg';

const AgregarNoticia = () => {
    return (
        <div className="cont-card noticias__agregar">
            <div className="cont-input">
                <img src={Imagen} alt="" className="img-noticias" />
                <input
                    type="text"
                    placeholder="¿Qué estás pensando, Andrison?"
                />
            </div>

            <div className="cont-adjuntar">
                <li>
                    <i id="video" className="fas fa-video"></i>
                    Video en vivo
                </li>
                <li>
                    <i id="foto" className="far fa-file-image"></i>
                    Foto/video
                </li>
                <li>
                    <i id="sentimiento" className="far fa-grin"></i>
                    Sentimiento/actividad
                </li>
            </div>
        </div>
    )
}

export default AgregarNoticia
