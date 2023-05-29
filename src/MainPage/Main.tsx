import { FunctionComponent } from "react";
import { PAGES } from "../App";

interface MainPageProps {
    page: PAGES;
}

const MainPage: FunctionComponent<MainPageProps> = ({ page }) => {
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

export default MainPage;
