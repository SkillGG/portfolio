import { FunctionComponent } from "react";
import { PAGES } from "../App";
import Main from "./Main/Main";

import "./Paginator.css";

interface PaginatorProps {
    page: PAGES;
}

const Paginator: FunctionComponent<PaginatorProps> = ({ page }) => {
    return (
        <main>
            {(() => {
                switch (page) {
                    case PAGES.ABOUT:
                        return <>about</>;
                    case PAGES.MAIN:
                        return <Main />;
                    case PAGES.PROJECTS:
                        return <>projects</>;
                    default:
                        return <>Oops</>;
                }
            })()}
        </main>
    );
};

export default Paginator;
