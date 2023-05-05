import React from 'react'
import { Link } from 'react-router-dom'
import { useSignOut } from 'react-auth-kit'
import { useAppContext } from '../context/AppContext'
import AxiosClient from '../Helper/axiosClient'

const TopNavigation = () => {
    const axios = AxiosClient()
    const signOut = useSignOut()
    const { updateLoginModalStatus } = useAppContext()
    

    const logOut = () => {
        axios.get('/auth/logout').then(({ data }) => {
            window.toastr.success(data.alert)
            signOut()
        }).catch(({ response }) => {
            updateLoginModalStatus(true)
        });
    }

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
                        <a className="nav-link" data-widget="navbar-search" href="#x" role="button">
                            <i className="fas fa-search"></i>
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#x" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" onClick={() => logOut()} data-slide="true" href="#x" role="button">
                            <i className="fas fa-sign-out-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default TopNavigation