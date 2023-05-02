import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [loginStatus, setLoginStatus] = useState(false);
    const [loginModalState, setLoginModalState] = useState(false);

    const INITIALVALUES = {
        site_name: "SPP APP",
        login_status: loginStatus,
        login_modal_state: loginModalState,
        updateLoginStatus: setLoginStatus,
        updateLoginModalStatus: setLoginModalState
    };

    return (
        <AppContext.Provider value={INITIALVALUES}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
