import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="" class="img-circle elevation-2" alt="User Image" />
                </div>
                <div class="info">
                    <Link to="/profile" class="d-block">Username</Link>
                </div>
            </div>
            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                            <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item">
                        <Link to="/dashboard" class="nav-link active">
                            <i class="nav-icon fas fa-home-alt"></i>
                            <p>Home</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation