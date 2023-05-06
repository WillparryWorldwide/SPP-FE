import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Login, CProjectList, ADashboard, AddNew, Profile, CreateSPPUser, ListSPPUser, Signup, WelcomePage } from './pages'
import Layout from './layout'

const Router = () => {
    return (
        <Routes>
            <Route path='/' >
            {/* Landing page */}
                <Route index element={<WelcomePage />} />

                {/* Dashboard */}
                <Route path="spp/">
                    <Route index element={<Login />} />

                    {/* Routes */}
                    <Route path="dashboard" element={<Layout />}>
                        <Route index element={<ADashboard />} />
                        <Route path='profile' element={<Profile />} />

                        {/* This route is for SPP . For both contractor and admin */}
                        <Route path="users" element={<ListSPPUser />}>
                            <Route path="register">
                                <Route path="admin" element={<Signup />} />
                                <Route path='contractor' element={<CreateSPPUser />} />
                            </Route>
                        </Route>
                        {/* Project route */}
                        <Route path="project">
                            <Route index element={<CProjectList />} />
                            <Route path="register" element={<AddNew />} />
                        </Route>
                    </Route>
                </Route>
            </Route>
            <Route path='*' element={<h1>404 Page</h1>} />
        </Routes>
    )
}

export default Router