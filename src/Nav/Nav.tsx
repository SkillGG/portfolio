import { FunctionComponent } from "react";
import { PAGES } from "../App";

import "./Nav.css";

interface NavProps {
    page: PAGES;
}

const Nav: FunctionComponent<NavProps> = ({ page }) => {
    console.log(PAGES);
    return (
        <>
            <nav>
                <ul>
                    {Object.entries(PAGES).map((r) => {
                        return <li key={`nav_${r[0]}`}>{r[0]}</li>;
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Nav;
