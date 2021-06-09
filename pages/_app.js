import { GlobalStyles } from '../styles/global'

export default function App({ Component, pageprops }) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageprops} />
        </>

    )
}