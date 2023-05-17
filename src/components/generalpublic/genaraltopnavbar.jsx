import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'

const GeneralTopNavigation = () => {
    



    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-light public-nav">
                <div className='w-100'>
                    <ul className="navbar-nav">
                        {/* <Link to="/" className="brand-link position-relative w-fit">
                            <img src={logo} alt="logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                            <span className="brand-text font-weight-light">SPPA</span>
                        </Link> */}
                    <div className="col-12 h-search">
                        <form className="form-inline w-100">
                        <div className="input-group input-group-sm w-100">
                            <input
                            className="form-control form-control-navbar"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            />
                            <div className="input-group-append">
                            <button className="btn btn-navbar search" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                        {/* <li className="nav-item">
                            <Link className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></Link>
                        </li> */}
                    </ul>
                </div>
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