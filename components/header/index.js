import { useContext } from 'react'
import { GlobalContext } from '../../contexts/global'
import styled, { ThemeProvider } from 'styled-components'

import { dark as darkTheme, light as lightTheme } from '../../styles/themes'

const Container = styled.div`
    background-color:${props => props.theme.bgColor.secondary};
    color:${props => props.theme.color};
    margin:0;

    display:flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items:center;
`

export default function Header() {

    const { dark, setDark } = useContext(GlobalContext)

    const rel = {
        true: darkTheme,
        false: lightTheme
    }

    return (
        <>
            <ThemeProvider theme={rel[dark]}>
                <Container>
                    <h1>Header aqui</h1>
                    <button onClick={() => setDark(!dark)}>Trocar de tema</button>
                </Container>
            </ThemeProvider>

        </>
    )
}