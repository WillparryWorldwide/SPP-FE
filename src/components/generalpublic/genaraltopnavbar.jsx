import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'

const GeneralTopNavigation = () => {
    



    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-dark ml-0">
                <ul className="navbar-nav">
                    <Link to="/" className="brand-link">
                        <img src={logo} alt="logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">SPPA</span>
                    </Link>
                    {/* <li className="nav-item">
                        <Link className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></Link>
                    </li> */}
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#x" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default GeneralTopNavigation