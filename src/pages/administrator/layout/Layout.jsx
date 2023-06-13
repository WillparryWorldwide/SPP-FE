import { Outlet } from "react-router-dom";
import SideBar from "../../components/discovery/sidebar";
import BottomNav from "../../components/discovery/bottomnav";
import { AppProvider } from "../../../context/AppContext";
import { useIsAuthenticated } from "react-auth-kit";

const DashboardLayout = () => {
	const isAuthenticated = useIsAuthenticated();
	window.localStorage.setItem("isLogin", isAuthenticated());

	return (
		<AppProvider>
			<div className="Toastify"></div>
			<div id="g_id_onload" data-client_id="884316028568-opn1m6dkaerej3acn6t6soqqieqovk65.apps.googleusercontent.com" data-callback="handleLogin" data-prompt_parent_id="g_id_onload" style={{ position: 'fixed', right: 0, bottom: 0, zIndex: 9999 }} />
			<div className="appLayout_dash-contents__f3VlW">
				<SideBar />
				<div className="appLayout_mainContents__Fvfpc overflow-y-auto flex flex-col w-full pb-16 lg:pb-0 ">
					<Outlet />
				</div>
				<BottomNav />
				<div className="place-items-end h-screen flex-shrink-0 w-[20%]  bg-white hidden" />
			</div>
		</AppProvider>
	);
};

export default DashboardLayout;