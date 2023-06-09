import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import TopNavBar from './TopNavBar'
import Navigation from './Navigation'
import { useAppContext } from '../context/AppContext'
import LoginPassword from '../components/LoginPassword'

const Layout = () => {
    const { site_name, login_modal_state, updateLoginModalStatus } = useAppContext()
    document.body.classList.remove('hold-transition', 'login-page', 'register-page')
    document.body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed', 'layout-navbar-fixed', 'layout-footer-fixed')
    return (
        <>
            <LoginPassword key={login_modal_state} setStatus={updateLoginModalStatus} status={login_modal_state} />
            <div className="wrapper">
                <TopNavBar />
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <Link to="/" className="brand-link">
                        <img src="" alt="logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">{site_name}</span>
                    </Link>
                    <Navigation />
                </aside>
                <div className="content-wrapper">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Layout