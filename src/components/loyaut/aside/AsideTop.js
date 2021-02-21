import React from 'react';
import Imagen from '../../../img/img_default.jpg';
import Imagen1 from '../../../img/aside/ul-1.png';
import Imagen2 from '../../../img/aside/ul-2.png';
import Imagen3 from '../../../img/aside/ul-3.png';
import Imagen4 from '../../../img/aside/ul-4.png';


const AsideTop = () => {
    return (
        <div>
            <ul className="bold">
                <li>
                    <img src={Imagen} alt="Imagen" />
                    Andrison Sánchez    
                </li> 
                <li>
                    <img src={Imagen1} alt="Imagen" />
                    COVID-19: Centro de información
                </li> 
                <li>
                    <img src={Imagen2} alt="Imagen" />
                    Amigos    
                </li> 
                <li>
                    <img src={Imagen3} alt="Imagen" />
                    Guardado
                </li> 
                <li>
                    <img src={Imagen4} alt="Imagen" />
                    Grupos   
                </li> 
                <li>
                    <i className="fas fa-chevron-down"></i>
                    Ver Más   
                </li> 
                   
            </ul>
        </div>
    )
}

export default AsideTop
