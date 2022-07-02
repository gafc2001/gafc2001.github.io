import React,{ useEffect} from 'react';

import { Header } from "../components/Header/Header"
import { Skill } from "../components/Skill/Skill"
import { Project } from "../components/Project/Project"
import { Footer } from '../components/Footer/Footer';
import { ContactForm } from '../components/Forms/ContactForm';
import { increaseVisit } from '../services/Visit';

export const Home = () => {

  useEffect(() => {
    const request = async () => {
      await increaseVisit();
    }
    request();
    return;
  },[]);
  
  return (
    <>
        <Header/>
        <Skill/>
        <Project/>
        <ContactForm/>
        <Footer/>
    </>
  )
}
