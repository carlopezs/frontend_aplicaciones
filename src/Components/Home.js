import React from 'react';
import FondoInvProductos05 from '../images/FondoInvProductos05.png';
import header_shape_2 from '../images/header-shape-2.svg';
import '../css/animate.css';
import '../css/bootstrap.min.css';
import '../css/default.css';
import '../css/lineicons.css';
import '../css/style.css';




function Home() {
    return (
        <div className="Header">
            <header className="header-area">
                <div className="navbar-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            </div>
                        </div> 
                    </div>
                </div> 

                <div id="home" className="header-hero bg_cover d-lg-flex align-items-center">

                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                    <div className="shape shape-5"></div>
                    <div className="shape shape-6"></div>

                    <div className="container">
                        <div className="row align-items-center justify-content-center justify-content-lg-between">
                            <div className="col-lg-6 col-md-10">
                                <div className="header-hero-content">
                                    <h3 className="header-title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s"><span>Bienvenido</span> <br/>Módulo Inventario</h3>
                                    <p className="text wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.6s">Módulo para manejar el inventario</p>
                                    <ul className="d-flex">
                                        <li><a href="https://rebrand.ly/appland-ud" rel="nofollow" className="main-btn wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.8s">Purchase Now</a></li>
                                    </ul>
                                </div> 
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-10">
                                <div className="header-image">
                                    <img src={FondoInvProductos05} alt="app" className="image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s"/>
                                </div> 
                            </div>
                        </div>
                    </div> 
                    <div className="header-shape-1"></div> 
                    <div className="header-shape-2">

                        <img src={header_shape_2} alt="shape"/>
                    </div> 
                </div> 
            </header>
        </div>
    )
}

export default Home

