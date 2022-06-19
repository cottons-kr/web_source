import React from "react"
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
    return (
        <HashRouter basename="/">
                <Header />
                <Background />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/blog"/>
                    <Route path="/feature"/>
                </Routes>
                <Footer />
        </HashRouter>
    )
}

createRoot(document.getElementById("root")).render(<App />)
