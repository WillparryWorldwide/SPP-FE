import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from 'react-auth-kit'

import { Signup, Login, Dashboard, CProjectList, ADashboard, AddNew, Profile } from './pages'
import Layout from './layout'

const Router = () => {
    return (
        <Routes>
            <Route path='signup/' element={<Signup />} />
            <Route path='login/' element={<Login />} />

            {/* Authenticated Routes */}
            <Route path="dashboard/" element={<><RequireAuth loginPath="/login/" /><Layout/></>}>
                <Route path='admin/'>
                    <Route index element={<ADashboard />} />
                    <Route path='profile/' element={<Profile />} />
                    <Route path='project/'>
                        <Route path='add/' element={<AddNew />} />
                    </Route>
                </Route>
                <Route index element={<Dashboard />} />
                <Route path='project/'>
                    <Route path='profile/' element={<Profile />} />
                    <Route index element={<CProjectList />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default Router