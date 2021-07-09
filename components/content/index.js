import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme"
import styled from 'styled-components'

const Container = styled.main`
    color:${props => props.theme.content.color};
    margin:0;
    padding:0;
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
`

export default function Content() {
    return (
        <>
            <Container>
                <h1>Título</h1>
            </Container>


        </>
    )
}