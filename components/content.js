import { useContext } from "react"
import { GlobalContext } from "../contexts/global"


export default function Content() {

    const theme = useContext(GlobalContext)

    return (
        <>
            <h1>Conteudo!</h1>
            <p>Tema:{theme}</p>
        </>
    )
}