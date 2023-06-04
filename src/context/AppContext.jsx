import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
	const navigate = useNavigate();
	const [isLogin, setIsLogin] = useState(false);

	const INITIALVALUES = {
		isLogin,
		setIsLogin
	};

	
	useEffect(() => {
		console.log("login?", isLogin);
		// if(!isLogin) navigate("/spp");
	}, []);

	return (
		<AppContext.Provider value={INITIALVALUES}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
