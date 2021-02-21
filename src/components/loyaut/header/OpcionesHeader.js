import React from 'react'
import Imagen from '../../../img/img_default.jpg';

const OpcionesHeader = () => {
    return (
        <div className="header__cont-opciones">
           <div className="header__btn-bio">
               <img src={Imagen} alt="A" />
               <h5 className="bold">Andrison</h5>
            </div> 
            
            <li>
                <i className="fas fa-plus"></i>
            </li>

            <li>
                <i className="fab fa-facebook-messenger"></i>
            </li>

            <li>
                <i className="fas fa-bell"></i>
            </li>

            <li>
                <i className="fas fa-sort-down"></i>
            </li>
        </div>
    )
}

export default OpcionesHeader
