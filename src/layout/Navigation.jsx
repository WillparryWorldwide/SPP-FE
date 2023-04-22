import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../layout/assets/images/avatar.png'
import { useAuthContext } from '../context/AuthContext'
import SectionModal from '../components/SectionModal'
import CategoryModal from '../components/CategoryModal'

const Navigation = () => {

    const { auth } = useAuthContext()
    if (auth !== undefined) {
        avatar = auth?.avatar ?? avatar
    }

    const [sectionModalState, setSectionModalState] = useState(false)
    const [categoryModalState, setCategoryModalState] = useState(false)

    return (
        <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src={avatar} className="img-circle elevation-2" alt="User Avatar" />
                </div>
                <div className="info">
                    <Link to="/profile" className="d-block">Username</Link>
                </div>
            </div>
            <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-sidebar">
                            <i className="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link active">
                            <i className="nav-icon fas fa-home-alt"></i>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">
                            <i className="nav-icon fas fa-list-check"></i>
                            <p>
                                SPP Users
                                <i className="fas fa-angle-left right"></i>
                            </p>
                        </Link>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link to="/dashboard/admin/spp-users" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>List</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/admin/spp-users/create" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Create</p>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">
                            <i className="nav-icon fas fa-list-check"></i>
                            <p>
                                Projects
                                <i className="fas fa-angle-left right"></i>
                            </p>
                        </Link>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link to="/dashboard/project" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>List</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/admin/project/add" className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Add New</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={() => setSectionModalState(!sectionModalState)} className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Create Section</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={() => setCategoryModalState(!categoryModalState)} className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>Create Category</p>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <SectionModal key={sectionModalState} status={sectionModalState} setStatus={setSectionModalState}/>
            <CategoryModal key={categoryModalState} status={categoryModalState} setStatus={setCategoryModalState}/>
        </div>
    )
}

export default Navigation