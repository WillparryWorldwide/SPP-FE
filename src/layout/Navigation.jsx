import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../layout/assets/images/avatar.png'
import { useAuthContext } from '../context/AuthContext'

const Navigation = () => {

    const { auth } = useAuthContext()
    if (auth !== undefined) {
        avatar = auth?.avatar ?? avatar
    }

    return (
        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src={avatar} class="img-circle elevation-2" alt="User Avatar" />
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
                    <li class="nav-item">
                        <Link class="nav-link">
                            <i class="nav-icon fas fa-list-check"></i>
                            <p>
                                Projects
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </Link>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <Link class="nav-link">
                                    <i class="nav-icon fas fa-list-check"></i>
                                    <p>
                                        Category
                                        <i class="fas fa-angle-left right"></i>
                                    </p>
                                </Link>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <Link to="/dashboard/category" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>List</p>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/dashboard/admin/category/add" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Add New</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link to="/dashboard/project" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>List</p>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/dashboard/admin/project/add" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Add New</p>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation