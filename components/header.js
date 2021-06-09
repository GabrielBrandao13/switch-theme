import { useContext } from 'react'
import { GlobalContext } from '../contexts/global'

export default function Header() {

    const theme = useContext(GlobalContext)

    return (
        <>
            <h1>Header!</h1>
            <p>Tema:{theme}</p>
        </>
    )
}