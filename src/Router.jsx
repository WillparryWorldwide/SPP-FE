import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Login, CProjectList, ADashboard, AddNew, Profile, CreateSPPUser, ListSPPUser, Signup, GeneralPublic, ProjectDetails, ViewProject, PublicIndividualProject, Welcome, Discover } from './pages'
import { AdminDashboardLayout } from './pages/administrator/layout'

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Welcome />} />
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
								<Route path="admin" element={<Signup />} />
								<Route path='contractor' element={<CreateSPPUser />} />
							</Route>
						</Route>

						<Route path="project">
							<Route index element={<CProjectList />} />
							<Route path="view/:id" element={<ViewProject />} />
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