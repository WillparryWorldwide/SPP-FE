import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from 'react-auth-kit'

import { Signup, Login, Dashboard } from './pages'

const Router = () => {
    return (
        <Routes>
            <Route path='signup/' element={<Signup />} />
            <Route path='login/' element={<Login />} />

            {/* Authenticated Routes */}
            <Route path="dashboard/" element={
                <RequireAuth loginPath="/login/">
                    <Route index element={<Dashboard />} />
                </RequireAuth>
            }></Route>
        </Routes>
    )
}

export default Router