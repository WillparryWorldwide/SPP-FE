import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Login, ViewAllProject, ADashboard, RegisterProject, Profile, ListSPPUser, ProjectDetails, ViewProject, Discover, RegisterAdmin, RegisterContractor, RegisterSector, RegisterMDA } from './pages'
import { AdminDashboardLayout } from './pages/administrator/layout'

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Discover />} />
			<Route >
				<Route path="/projects" element={<Discover />} />
				<Route path='/project/:id' element={<ProjectDetails />} />

				<Route path="spp">
					<Route index element={<Login />} />

					<Route path="dashboard" element={<AdminDashboardLayout />}>
						<Route index element={<ADashboard />} />
						<Route path='profile' element={<Profile />} />

						<Route path="users">
							<Route index element={<ListSPPUser />} />
							<Route path="register">
								<Route path="admin" element={<RegisterAdmin />} />
								<Route path='contractor' element={<RegisterContractor />} />
								<Route path='sector' element={<RegisterSector />} />
								<Route path='mda' element={<RegisterMDA />} />
							</Route>
						</Route>

						<Route path="projects">
							<Route index element={<ViewAllProject />} />
							<Route path="view/:id" element={<ViewProject />} />
							<Route path="register" element={<RegisterProject />} />
						</Route>
					</Route>
				</Route>
			</Route>
			<Route path='*' element={<h1>404 Page</h1>} />
		</Routes>
	)
}

export default Router