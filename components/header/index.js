import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import styled from 'styled-components'

const Container = styled.div`
    background-color:${props => props.theme.header.bgColor};
    color:${props => props.theme.header.color};
    margin:0;
    padding:0;

    display:flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items:center;

    > *{
        margin: 10px;
    }

    button{
        background:none;
        border:none;
        outline:none;
        width: 50px;
        height: 50px;
        cursor:pointer;

        svg{
            width: 100%;
            height:100%;

            fill: ${props => props.theme.header.color};
        }
    }
`

export default function Header() {

    const { dark, setDark } = useContext(ThemeContext)

    return (
        <>
            <Container>
                <h1>Header aqui</h1>
                <button onClick={() => setDark(!dark)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6.5v11c3.03 0 5.5-2.47 5.5-5.5S15.03 6.5 12 6.5z" />
                    </svg>
                </button>
            </Container>
        </>
    )
}