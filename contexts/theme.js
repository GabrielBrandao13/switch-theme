import { useState } from 'react'
import { createContext } from 'react'
import { themes } from '../styles/themes'

import { ThemeProvider } from 'styled-components'

export const ThemeContext = createContext({})

export function ThemeContextProvider({ children }) {
    const [dark, setDark] = useState(true)

    const rel = {
        true: 'dark',
        false: 'light'
    }

    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            <ThemeProvider theme={themes[rel[dark]]}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}