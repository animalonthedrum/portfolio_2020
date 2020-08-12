import React, {useState} from "react"
import {createGlobalStyle, ThemeProvider} from "styled-components"
// import {normalize} from "styled-normalize"

//Components


//Context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context/globalContext"

const GlobalStyle = createGlobalStyle `
${'' /* ${normalize} */}
* {
  text-decoration:none;
  cursor:none;
}

html {
  box-sizing:border-box;
  -webkit-font-smoothing:antialiased;
  font-size:16px;
}
body {
  background:${props=>props.theme.background};
  overscroll-behavior:none;
  overflow-x:hidden;
}
`

const Layout = ({ children }) => {

  const { currentTheme, cursorStyles  } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()


  const [toggleMenu, setToggleMenu] = useState(false)

  const darkTheme = {
    background:"rgba(54,57,61, 1)",
    bg2:"#748239",
    text:"rgba(240,240,195, 1)",
    accent:"rgba(184,167,109, 1)",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
    cursor:"rgba(240,240,195, 1)"
  }
  const lightTheme = {
    background:"rgba(240,240,195, 1)",
    bg2:"rgba(184,167,109, 1)",
    text:"rgba(54,57,61, 1)",
    accent:"#748239",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
    cursor:"rgba(54,57,61, 1)"
  }

//   const onCursor = cursorType => {
//     cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
//     dispatch({type:'CURSOR_TYPE', cursorType: cursorType })
//   }


  return (
    <>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme }>
      <GlobalStyle/>
      <CustomCursor/>
      <Header
        // onCursor={onCursor}
        // toggleMenu={toggleMenu}
        // setToggleMenu={setToggleMenu}
        // hamburgerPosition={hamburgerPosition}
        // setHamburgerPosition={setHamburgerPosition}
      />
      <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
        setHamburgerPosition={setHamburgerPosition}
      />
      <main>{children}</main>
        </ThemeProvider>
    </>
  )
}

export default Layout