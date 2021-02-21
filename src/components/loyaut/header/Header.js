import React from 'react'
import NavBar from './NavBar';
import Buscador from './Buscador';
import OpcionesHeader from './OpcionesHeader';

const Header = () => {
    return (
        <>
            <div className="reyeno"></div>
            <header>
                <Buscador />
                <NavBar />
                <OpcionesHeader />
            </header>
        </>
    )
}

export default Header
