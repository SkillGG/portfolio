import { FC, useState } from "react";

import "./Footer.css";
import { LANGS } from "../App";
import { Dictionaries } from "../Langs/Dictionary";

interface FooterProps {
    lang: LANGS;
    switchLang(l: LANGS): void;
}

const langPath = "./lang";

const Footer: FC<FooterProps> = ({ lang, switchLang }) => {
    const [langSelect, setLangSelect] = useState(false);

    return (
        <footer>
            <div id="languageSelectionBox">
                <div>
                    <button
                        className="langButton"
                        id="currentLang"
                        onClick={() => {
                            setLangSelect(!langSelect);
                        }}
                    >
                        <img
                            className="langSelectFlag"
                            width={30}
                            src={`${langPath}/${lang}.png`}
                            alt={`${lang}`}
                        />
                    </button>
                    <ul
                        id="langSelect"
                        data-shown={langSelect ? "true" : "false"}
                    >
                        {Object.values(LANGS).map((l) => {
                            return (
                                l !== lang && (
                                    <li key={`lang_${l}`}>
                                        <button
                                            className="langButton"
                                            onClick={() => {
                                                switchLang(l);
                                            }}
                                        >
                                            <img
                                                className="langSelectFlag"
                                                src={`${langPath}/${l}.png`}
                                            />
                                        </button>
                                    </li>
                                )
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div id="infoBox">
                <div>
                    {Dictionaries[lang].madeBy}: SkillGG (Marcin Majewski)
                </div>
                <div id="icons">
                    <div>
                        <a>
                            <img src="./assets/li.svg" alt="LinkedIn" />
                        </a>
                    </div>
                    <div>
                        <a>
                            <img src="./assets/cv.svg" alt="CV" />
                        </a>
                    </div>
                    <div>
                        <a>
                            <img src="./assets/dc.svg" alt="Discord" />
                        </a>
                    </div>
                    <div>
                        <a>
                            <img src="./assets/pr.svg" alt="Pracuj.pl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
