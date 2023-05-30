import { FunctionComponent } from "react";
import { PAGES } from "../App";

interface PaginatorProps {
    page: PAGES;
}

const Paginator: FunctionComponent<PaginatorProps> = ({ page }) => {
    return (
        <>
            {(() => {
                switch (page) {
                    case PAGES.ABOUT:
                        return <>about</>;
                    case PAGES.MAIN:
                        return <>main</>;
                    case PAGES.PROJECTS:
                        return <>projects</>;
                }
            })()}
        </>
    );
};

export default Paginator;
