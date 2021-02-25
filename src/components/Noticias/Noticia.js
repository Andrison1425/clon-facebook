import React from 'react'
import Imagen from '../../img/img_default.jpg';

const Noticia = () => {
    return (
        <div className="cont-card noticia__noticia">
            <div className="info-publicado">
                <img src={Imagen} alt="" className="img-noticias" />
                <span>
                    <h3>Ega Perez <span>►</span> angular español</h3>
                    <span>19 h . <i className="fas fa-globe-americas"></i></span>
                </span>
                <i className="fas fa-ellipsis-h"></i>
            </div>
            <h2>Algún freelancer en angular, saludos</h2>
            <div className="interacciones">
                <span>
                    <i className="fas fa-thumbs-up"></i>
                </span>
                <span>23 comentarios</span>
            </div>
        </div>
    )
}

export default Noticia
