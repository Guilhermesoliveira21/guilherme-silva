import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { HomePage } from "../pages/Home"
import { Footer } from "../components/Footer"

export const RouterCore = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}