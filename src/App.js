import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Education from './components/education/Education';
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills';
import Nasa from './components/nasa/Nasa'
import Projects from './components/projects/Projects'

const App = () => {
  return (
    <>
    <Header />

    <main className="main">
      <Home />
      <Nasa />
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </main>
    </>
  )
}

export default App