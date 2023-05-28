import { useState } from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import MainPage from "./MainPage/Main";
import Nav from "./Nav/Nav";

export enum PAGES {
    MAIN = "main",
    ABOUT = "about",
}

function App() {
    const [page, setPage] = useState<PAGES>(PAGES.MAIN);

    window.onload = () => {
        if (location.pathname.match(/^\/about$/)) setPage(PAGES.ABOUT);
        else setPage(PAGES.MAIN);
    };

    return (
        <>
            <Nav page={page} />
            <MainPage page={page} />
            <Footer />
        </>
    );
}

export default App;
