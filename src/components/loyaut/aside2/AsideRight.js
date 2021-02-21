import React from 'react'
import Imagen from '../../../img/img_default.jpg';

const AsideRight = () => {
    return (
        <>
            <div className="aside2__reyeno"></div>
            <aside className="aside2__aside">
                <h3 className="titulo-gris">Contactos</h3>
                <ul>
                    <li>
                        <img
                            src={Imagen}
                            alt="Img"
                        />
                        <h3 className="bold">Keudry Martinez Polanco</h3>
                    </li>
                    <li>
                        <img
                            src={Imagen}
                            alt="Img"
                        />
                        <h3 className="bold">Keudry Martinez Polanco</h3>
                    </li>
                    <li>
                        <img
                            src={Imagen}
                            alt="Img"
                        />
                        <h3 className="bold">Keudry Martinez Polanco</h3>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default AsideRight
