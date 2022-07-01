import React from 'react';

import { Header } from "../components/Header/Header"
import { Skill } from "../components/Skill/Skill"
import { Project } from "../components/Project/Project"
import { Footer } from '../components/Footer/Footer';
import { ContactForm } from '../components/Forms/ContactForm';
export const Home = () => {
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
