import { ThemeProvider } from "styled-components"
import { StyleGlobal } from "../styleGlobal"
import { RouterCore } from "../routes"
import { themeLight } from "../theme/light"
import { useContext } from "react"
import { ThemeColorContext } from "../context/Theme"
import { themeDark } from "../theme/dark"

export const CoreApp = () => {

    const { theme } = useContext(ThemeColorContext);

console.log(theme)

    return (
         <ThemeProvider theme={theme ? themeLight : themeDark}>
              <StyleGlobal />
              <RouterCore/>
            </ThemeProvider>
    )
}