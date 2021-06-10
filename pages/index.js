import { GlobalContext } from '../contexts/global'
import Header from '../components/header'
import Content from '../components/content'
import { useState } from 'react'

export default function App() {

    const [dark, setDark] = useState(false)

    return (
        <>
            <GlobalContext.Provider value={{ dark, setDark }}>
                <Header />
                <Content />
            </GlobalContext.Provider>
        </>
    )
}