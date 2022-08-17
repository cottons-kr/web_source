import { createRoot } from "react-dom/client"
import Welcome from "./Components/Welcome"
import NavBar from "./Components/NavBar"
import { HashRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import { useSelector } from "react-redux"
import classNames from "classnames"
import { useEffect } from "react"

import "#scss/reset.scss"
import '#scss/css/toggleTheme.css'
import styles from "#scss/App.module.scss"
import Footer from "./Components/Footer"

export default function App() {
    const theme = useSelector((state: any) => state.theme)

    useEffect(() => {
        setTimeout(() => { window.scrollTo({ top: 0 }) }, 100)
    }, [])

    return (
        <div className={classNames(
            styles.app,
            theme === "light" ? 'light' : 'dark'
        )}>
            <HashRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                </Routes>
            </HashRouter>
            <Footer />
        </div>
    )
}

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
