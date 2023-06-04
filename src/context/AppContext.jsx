import React, { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const isLogin = window.localStorage.getItem("isLogin");

	useEffect(() => {
		if(!Boolean(isLogin) && !(location.pathname === '/' || location.pathname.search("/project") === 0)) navigate("/spp");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<AppContext.Provider value={{}}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};