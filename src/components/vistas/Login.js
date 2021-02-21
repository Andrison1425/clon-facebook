import React from 'react'
import logo from '../../img/logo.svg'
import cardImg from '../../img/adrian.jpg'
import masImg from '../../img/mas.png'

const Login = () => {
    return (
        <div className="container">
            <div 
                className="row auth__centrar"
            >
                <div className="col-7">
                    <img 
                        src={logo}  
                        alt="Logo de Facebook"
                        className="auth__logo"
                    />
                    <h2>Inicios de sesión recientes</h2>
                    <span>Haz clic en tu foto o añade una cuenta.</span>

                    <div
                        className="mt-2 d-flex"
                    >
                        <div className="auth__flex">
                            <img src={cardImg} alt="..." />
                            <h5 className="txt-center">Adrian</h5>
                        </div>

                        <div className="ml-3 auth__flex">
                            <img src={masImg} alt="..." />
                            <h5 className="txt-center">Añadir cuenta</h5>
                        </div>

                    </div>
                </div>

                <div className="col-5">
                    <div className="rounded p-4 bg-light form-group auth__mt-cont">
                            <input 
                                type="email" 
                                className="form-control padding"
                                placeholder="Correo electrónico"
                            />
                            <input 
                                type="password" 
                                className="form-control my-3 padding"
                                placeholder="Contraseña"
                            />
                        <button 
                            type="submit" 
                            className="btn btn-primary w-100"
                        >
                            <h3>Entrar</h3>
                        </button>

                        <div className="centrar">
                            <a 
                                href="#!"
                                className="my-2 text-center"
                            >¿Has olvidado la contraseña?</a>
                            <hr />

                            <a
                                href="ad"
                                className="btn btn-success auth__btn"
                            >
                                Crear cuenta nueva
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Login
