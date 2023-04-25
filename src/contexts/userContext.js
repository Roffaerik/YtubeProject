import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children}) => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <UserContext.Provider value={{openMenu, setOpenMenu}}>
            {children}
        </UserContext.Provider>
    )
}