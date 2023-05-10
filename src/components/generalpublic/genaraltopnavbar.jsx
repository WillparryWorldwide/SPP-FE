import React from 'react'
import { Link } from 'react-router-dom'

const GeneralTopNavigation = () => {
    



    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></Link>
                    </li>
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