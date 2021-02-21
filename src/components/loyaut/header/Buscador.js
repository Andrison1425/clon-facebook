import React from 'react'
import Imagen from '../../../img/logo-md.png'

const Buscador = () => {
    return (
        <div className="header__cont-buscador">
            <img 
                src={Imagen} 
                alt="Logo Facebook" 
                className="header__img-logo"
            />
            <form className="header__font-buscar">
                <i className="fas fa-search header__icon-buscar"></i>
                <input 
                    type="search"
                    name="search"
                    placeholder="Buscar en Facebook"
                    className="header__input"
                />
            </form>
        </div>
    )
}

export default Buscador
