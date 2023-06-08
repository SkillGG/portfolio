import { FunctionComponent } from "react";
import { PAGES } from "../App";
import Main from "./Main/Main";

import "./Paginator.css";
import About from "./About/About";
import Projects from "./Projects/Projects";

interface PaginatorProps {
    page: PAGES;
}

const Paginator: FunctionComponent<PaginatorProps> = ({ page }) => {
    return (
        <main>
            {(() => {
                switch (page) {
                    case PAGES.ABOUT:
                        return <About />;
                    case PAGES.MAIN:
                        return <Main />;
                    case PAGES.PROJECTS:
                        return <Projects />;
                    default:
                        return <>This page doesn't exist!</>;
                }
            })()}
        </main>
    );
};

export default Paginator;
