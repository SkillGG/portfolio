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
                                <svg
                                    preserveAspectRatio="none"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 100 25"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="m -20,24.999826 c 0,0 21.256003,0.07447 30,-2.857118 C 19.204518,19.056718 21.018318,11.150535 30,7.857118 35.783493,5.7364182 43.128157,5 50,5 c 6.871843,0 14.216507,0.7364182 20,2.857118 8.981682,3.293417 10.79548,11.1996 20,14.28559 8.744,2.931592 30,2.857118 30,2.857118" />
                                </svg>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Nav;
