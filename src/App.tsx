import { useState } from "react";
import Footer from "./Footer/Footer";
import Paginator from "./Paginator/Paginator";
import Nav from "./Nav/Nav";

import "./App.css";

export enum PAGES {
    MAIN = "main",
    PROJECTS = "projects",
    ABOUT = "about",
}

export enum LANGS {
    EN = "english",
    PL = "polish",
}

function App() {
    const [page, setPage] = useState<PAGES>(PAGES.MAIN);
    const [lang, setLang] = useState<LANGS>(LANGS.EN);

    const checkPageFromURL = () => {
        Object.values(PAGES).forEach((v) => {
            if (location.pathname.startsWith(`/${v}`)) setPage(v);
        });
        const localStorageLang = localStorage.getItem("lang");
        if (localStorageLang) {
            Object.values(LANGS).forEach((ln) => {
                if (ln === localStorageLang) setLang(ln);
            });
        }
    };

    window.onload = window.onpopstate = () => {
        checkPageFromURL();
    };

    return (
        <>
            <Nav
                page={page}
                switchPage={(p) => {
                    setPage(p);
                    history.pushState("", "", `/${p}`);
                }}
                lang={lang}
            />
            <Paginator page={page} />
            <Footer
                lang={lang}
                switchLang={(l) => {
                    setLang(l);
                    localStorage.setItem("lang", l);
                }}
            />
        </>
    );
}

export default App;
