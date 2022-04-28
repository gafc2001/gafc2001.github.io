import React, { useState,useEffect } from 'react';

import { Header } from "./../components/Header/Header"
import { Skill } from "./../components/Skill/Skill"
import { Project } from "./../components/Project/Project"
import { language } from "./../assets/lang/languages"
import { Footer } from '../components/Footer/Footer';
export const Index = () => {
  const prefLanguage = window.localStorage.getItem("lang")
  const [lang,setLang] = useState(language[prefLanguage])
  const selectLanguage = (value) => {
    window.localStorage.setItem("lang",value)
    setLang(language[value])
  }
  return (
    <>
        <Header data={lang.header} action={selectLanguage}/>
        <Skill data={lang.skills}/>
        <Project data={lang.project}/>
        <Footer/>
    </>
  )
}
