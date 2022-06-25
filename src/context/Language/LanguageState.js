import React, {useState} from 'react';
import LanguageContext from "./LanguageContext";
const UserState = (props) => {
    const prefLanguage = window.localStorage.getItem("lang");

    const [language,setLanguage] = useState("es");

    const selectLanguage = (value) => {
        localStorage.setItem("lang",value);
        setLanguage(language[value]);
    }
    return(
        <LanguageContext.Provider value ={{
            language,
            setLanguage,
        }}>
            {props.children}
        </LanguageContext.Provider >
    );
}
export default UserState;