import { ThemeContextProvider } from '../contexts/theme'
import Header from '../components/header'
import Content from '../components/content'


import styled from 'styled-components';

export default function App() {
    return (
        <>
            <ThemeContextProvider>
                <Container>
                    <Header />
                    <Content />

                </Container>
            </ThemeContextProvider>

        </>
    )
}

const Container = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.content.bgColor};
`