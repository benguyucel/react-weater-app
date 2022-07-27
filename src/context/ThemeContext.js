import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

export const ThemeProviver = ({ children }) => {
    const [theme, setTheme] = useState(0)
    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}
export const useTheme = () => useContext(ThemeContext)
