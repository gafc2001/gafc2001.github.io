import {useContext} from 'react';
import LanguageContext from '../context/Language/LanguageContext';

const useLanguage = () => useContext(LanguageContext);

export default useLanguage;