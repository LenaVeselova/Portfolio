import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Projects from "./Projects";
import Slogan from "./Slogan";
import Contacts from "./Contacts";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <Main/>
        <Projects/>
        <Skills/>
        <Slogan/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
