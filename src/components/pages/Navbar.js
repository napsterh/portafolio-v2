import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdEmail, MdFingerprint } from 'react-icons/md'
import { SiGithub, SiTwitter } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'
import { FaBars, FaTimes, FaHome, FaRunning, FaCode, FaLaptopCode } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <MdFingerprint className="navbar-icon" />
                        Homer
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                <FaHome/>Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/experiencia" className="nav-links" onClick={closeMobileMenu}>
                                <FaRunning/>Experiencia
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/habilidades" className="nav-links" onClick={closeMobileMenu}>
                                <FaCode/> Habilidades
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/proyectos" className="nav-links" onClick={closeMobileMenu}>
                                <FaLaptopCode/> Proyectos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-links" onClick={closeMobileMenu}>
                                <MdEmail/> Contacto
                            </Link>
                        </li>
                    </ul>
                    <ul className='nav-menu'>
                        <li className="nav-item">
                            <Link to="/" className="nav-links-redes">
                                <SiGithub/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links-redes">
                                <SiTwitter/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links-redes">
                                <RiInstagramFill/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;

/*
        <li className="nav-btn">
            {button ? (
                <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">Registrarse</Button>
                </Link>
            ) : (
                <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">Registrarse</Button>
                </Link>
            )}
        </li>
*/