import { FunctionComponent } from "react";
import { PAGES } from "../App";

interface NavProps {
    page: PAGES;
}

const Nav: FunctionComponent<NavProps> = ({ page }) => {
    return <>you're on {page}</>;
};

export default Nav;
