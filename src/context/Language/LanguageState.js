import React, { useState } from "react";
import LanguageContext from "./LanguageContext";
import {language} from './../../assets/lang/languages';
const UserState = (props) => {
    const prefLanguage = localStorage.getItem("lang");
    const [lang, setLang] = useState(language[prefLanguage]);
    const selectLanguage = (value) => {
        localStorage.setItem("lang", value);
        setLang(language[value]);
    };
    return (
        <LanguageContext.Provider
        value={{
            lang,
            selectLanguage,
        }}
        >
        {props.children}
        </LanguageContext.Provider>
    );
};
export default UserState;
