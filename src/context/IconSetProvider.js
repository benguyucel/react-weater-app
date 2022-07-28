import { createContext, useContext, useState } from "react";

const IconSetContext = createContext();

export const IconSetProvider = ({ children }) => {
    const [icon, setIcon] = useState("Color_SET1")
    return <IconSetContext.Provider value={{ icon, setIcon }}>
        {children}
    </IconSetContext.Provider>
}

export const useIconSet = () => useContext(IconSetContext)