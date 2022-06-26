import React from 'react';

import { Header } from "../components/Header/Header"
import { Skill } from "../components/Skill/Skill"
import { Project } from "../components/Project/Project"
import { Footer } from '../components/Footer/Footer';
export const Home = () => {
  return (
    <>
        <Header/>
        <Skill/>
        <Project/>
        <Footer/>
    </>
  )
}
