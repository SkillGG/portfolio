import { LANGS, PAGES } from "../App";

import { PL as polish } from "./PL";
import { EN as english } from "./EN";

export type Dictionary = Record<PAGES, string> &
    Record<LANGS, string> & {
        madeBy: string;
    };

export const Dictionaries: Record<LANGS, Dictionary> = { english, polish };
