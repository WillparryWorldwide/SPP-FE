import { Outlet } from "react-router-dom";
import MobileNav from "./components/MobileNav";
import SideBar from "./components/SideBar";

const DashboardLayout = () => {
	return (
		<>
			<div>
				<div className="Toastify"></div>
				<div id="g_id_onload" data-client_id="884316028568-opn1m6dkaerej3acn6t6soqqieqovk65.apps.googleusercontent.com" data-callback="handleLogin" data-prompt_parent_id="g_id_onload" style={{ position: 'fixed', right: 0, bottom: 0, zIndex: 9999 }} />
				<div className="appLayout_dash-contents__f3VlW">
					<SideBar />
					<div className="appLayout_mainContents__Fvfpc overflow-y-auto flex flex-col w-full pb-16 lg:pb-0 ">
						<Outlet />
					</div>
					<MobileNav />
					<div className="place-items-end h-screen flex-shrink-0 w-[20%]  bg-white hidden" />
				</div>
			</div>

		</>
	);
};

export default DashboardLayout;