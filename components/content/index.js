import { useContext } from "react"
import { GlobalContext } from "../../contexts/global"
import styled, { ThemeProvider } from 'styled-components'

import { dark as darkTheme, light as lightTheme } from '../../styles/themes'

const Container = styled.div`
    background-color:${props => props.theme.bgColor.primary};
    color:${props => props.theme.color};
    margin:0;
`

export default function Content() {

    const { dark } = useContext(GlobalContext)

    const rel = {
        true: darkTheme,
        false: lightTheme
    }

    return (
        <>
            <ThemeProvider theme={rel[dark]}>
                <Container>
                    <h1>Conteudo!</h1>
                    <p>Tema:{dark ? "Escuro" : "Claro"}</p>
                </Container>
            </ThemeProvider>



        </>
    )
}