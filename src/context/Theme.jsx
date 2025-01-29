import { createContext, useState } from "react";

export const ThemeColorContext = createContext();

export const ThemeColorProvider = ({children}) => {

    const [theme, setTheme] = useState(false);

    function toggleThemeColor() {
        setTheme((prevTheme) => !prevTheme);
    }

    return (
        <ThemeColorContext.Provider value={{theme, toggleThemeColor}}>
            {children}
        </ThemeColorContext.Provider>
    )
}