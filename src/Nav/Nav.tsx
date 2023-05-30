import { FunctionComponent } from "react";
import { LANGS, PAGES } from "../App";

import "./Nav.css";
import { Dictionaries } from "../Langs/Dictionary";

interface NavProps {
    page: PAGES;
    lang: LANGS;
    switchPage(p: PAGES): void;
}

const Nav: FunctionComponent<NavProps> = ({ page, switchPage, lang }) => {
    return (
        <>
            <nav>
                <ul>
                    {Object.entries(PAGES).map((r) => {
                        return (
                            <li
                                data-selected={page !== r[1] ? `` : "selected"}
                                key={`nav_${r[0]}`}
                            >
                                <button
                                    className="pageButton"
                                    onClick={() => {
                                        if (page !== r[1]) switchPage(r[1]);
                                    }}
                                    id={`nav_${r[0]}`}
                                >
                                    {Dictionaries[lang][r[1]]}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Nav;
