import React from 'react';
import {  Button } from './Button';
import { Link } from 'react-router-dom';
import './Presentacion.css';

function Presentacion({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headLine,
    descripcion,
    presentacion,
    descripcion1,
    descripcion2,
    descripcion3,
    descripcion4,
    descripcion5,
    buttonLabel,
    imgTop,
    imgBottom,
    img,
    alt,
    imgStart
}) {
    return (
        <div className={lightBg ? 'home__presentacion-section' : 'home__presentacion-section darkBg' }>
            <div className="container">
                <div className="row home__presentacion-row"
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__presentacion-text-wrapper">
                            <div className="home__img-wrapper">
                                <img src={imgTop} alt={alt} className="home__img-top" />
                            </div>
                            <h1 className={lightText ? 'heading' : 'geading dark'}>{headLine}</h1>
                            {/* <p className={lightTextDesc ? 'home__presentacion-subtitle' : 'home__presentacion-subtitle dark'}>{descripcion}</p> */}
                            <section className="col mainHero">
                                <div className="box">
                                    <ul>
                                        <li className="item-2">{descripcion1}</li>
                                        <li className="item-3">{descripcion3}</li>
                                        <li className="item-4">{descripcion4}</li>
                                        <li className="item-1">{descripcion1}</li>
                                        <li className="item-2">{descripcion2}</li>
                                        <li className="item-3">{descripcion3}</li>
                                        <li className="item-4">{descripcion5}</li>
                                        <li className="item-1">{descripcion1}</li>
                                    </ul>
                                </div>
                            </section>
                            <div className="home__img-wrapper">
                                <img src={imgBottom} alt={alt} className="home__img-bottom" />
                            </div>
                        </div>
                    </div>
                    <div className="col-img">
                        <div className="home__presentacion-img-wrapper image-circle">
                            <img src={img} alt={alt} className="home__presentacion-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentacion;