import { useState } from "react";
import Footer from "./Footer/Footer";
import MainPage from "./MainPage/Main";
import Nav from "./Nav/Nav";

import "./App.css";

export enum PAGES {
    MAIN = "main",
    PROJECTS = "projects",
    ABOUT = "about",
}

function App() {
    const [page, setPage] = useState<PAGES>(PAGES.MAIN);

    window.onload = () => {
        if (location.pathname.match(/^\/about$/)) setPage(PAGES.ABOUT);
        else if (location.pathname.match(/^\/projects$/)) setPage(PAGES.PROJECTS);
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
