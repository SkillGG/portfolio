import { FC } from "react";

import "./Footer.css";

const Footer: FC<object> = () => {
    return (
        <footer>
            <div>
                <div>Made by: SkillGG (Marcin Majewski)</div>
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
