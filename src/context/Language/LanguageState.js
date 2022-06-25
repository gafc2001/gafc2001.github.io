import React, { useState } from "react";
import LanguageContext from "./LanguageContext";
import {language} from './../../assets/lang/languages';
const UserState = (props) => {
    const prefLanguage = localStorage.getItem("lang");
    const [lang, setLang] = useState(language[prefLanguage]);
    const handleLanguageChange = (value) => {
        localStorage.setItem("lang", value);
        setLang(language[value]);
    };
    return (
        <LanguageContext.Provider
        value={{
            lang,
            handleLanguageChange,
        }}
        >
        {props.children}
        </LanguageContext.Provider>
    );
};
export default UserState;
