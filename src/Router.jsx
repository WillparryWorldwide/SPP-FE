import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from 'react-auth-kit'

import { Login, Dashboard, CProjectList, ADashboard, AddNew, Profile, CreateSPPUser, ListSPPUser, Signup } from './pages'
import Layout from './layout'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />

            {/* Authenticated Routes */}
            <Route path="dashboard/" element={<><RequireAuth loginPath="/" /><Layout/></>}>
                <Route path='admin/'>
                    <Route index element={<ADashboard />} />
                    <Route path='create-user/' element={<Signup />} />
                    <Route path='profile/' element={<Profile />} />
                    <Route path='project/'>
                        <Route index element={<CProjectList />} />
                        <Route path='add/' element={<AddNew />} />
                    </Route>
                    <Route path='spp-users/'>
                        <Route index element={<ListSPPUser />} />
                        <Route path='create/' element={<CreateSPPUser />} />
                    </Route>
                </Route>
                <Route index element={<Dashboard />} />
                <Route path='project/'>
                    <Route path='profile/' element={<Profile />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default Router