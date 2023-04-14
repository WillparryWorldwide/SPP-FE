import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import TopNavBar from './TopNavBar'
import Navigation from './Navigation'
import { useAppContext } from '../context/AppContext'
import ContentHeader from '../components/ContentHeader'

const Layout = () => {
    const { site_name } = useAppContext()
    document.body.classList.remove('hold-transition', 'login-page')
    document.body.classList.add('hold-transition', 'dark-mode', 'sidebar-mini', 'layout-fixed', 'layout-navbar-fixed', 'layout-footer-fixed')
    return (
        <div class="wrapper">
            <TopNavBar />
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="/" class="brand-link">
                    <img src="" alt="logo" class="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span class="brand-text font-weight-light">{site_name}</span>
                </Link>
                <Navigation />
            </aside>
            <div class="content-wrapper">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout