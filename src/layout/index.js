import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import TopNavBar from './TopNavBar'
import Navigation from './Navigation'
import { useAppContext } from '../context/AppContext'
import LoginPassword from '../components/LoginPassword'
import { appendScript } from '../Utils/AppendScript'

import '../assets/vendor/fontawesome/css/all.min.css'
import '../assets/vendor/overlayScrollbars/css/OverlayScrollbars.min.css'
import '../assets/vendor/datatables-bs4/css/dataTables.bootstrap4.min.css'
import '../assets/vendor/datatables-responsive/css/responsive.bootstrap4.min.css'
import '../assets/vendor/datatables-buttons/css/buttons.bootstrap4.min.css'
import '../assets/css/adminlte.min.css'

const Layout = () => {
    const { site_name, login_modal_state, updateLoginModalStatus } = useAppContext()
    document.body.classList.remove('hold-transition', 'login-page', 'register-page')
    document.body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed', 'layout-navbar-fixed', 'layout-footer-fixed')

    useEffect(() => {
        appendScript('../assets/vendor/jquery/jquery.min.js')
        appendScript('../assets/vendor/overlayScrollbars/js/jquery.overlayScrollbars.min.js')
        appendScript('../assets/vendor/datatables/jquery.dataTables.min.js')
        appendScript('../assets/vendor/datatables-bs4/js/dataTables.bootstrap4.min.js')
        appendScript('../assets/vendor/datatables-responsive/js/dataTables.responsive.min.js')
        appendScript('../assets/vendor/datatables-responsive/js/responsive.bootstrap4.min.js')
        appendScript('../assets/js/adminlte.js')
    })
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