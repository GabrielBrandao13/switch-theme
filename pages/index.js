import { GlobalContext } from '../contexts/global'
import Header from '../components/header'
import Content from '../components/content'

export default function App() {
    return (
        <>
            <GlobalContext.Provider value="dark">
                <Header />
                <Content />
            </GlobalContext.Provider>
        </>
    )
}