import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import AboutUs from './components/CareerPage/AboutUs'
import AboutUsReal from './components/AboutUs/AboutUsReal';
import Zpod from './components/Zpod/Zpod';
import VideosScroll from './components/videoScroll/videoScroll.js';
import Contact from './components/Contact/Contact';
import Techpage from './components/TechPage/Techpage';
import VideosScroll2 from './components/videoScroll/mobvideoscroll';
import Privacy from './components/Footer/privacy';
import TermsOfUse from './components/Footer/TermsOfUse'
import UploadForm from './components/CareerPage/Uploadform';
import Projects from './components/testing/Projects/Projects';
import Testing from './components/testing/testing';
function App() {
  return (

    <div className='main'>

    <div className='bodyContainer'>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Contact" element={<Contact/>}></Route>
        <Route exact path="/AboutUs" element={<AboutUsReal/>}></Route>
        <Route exact path="/Journey" element={<VideosScroll/>}></Route>
        <Route exact path="/Journeymob" element={<VideosScroll2/>}></Route>
        <Route exact path="/Career" element={<AboutUs/>}></Route>
        <Route exact path="/Tech" element={<Techpage/>}></Route>
        <Route exact path="/zpod" element={<Zpod/>}></Route>
        <Route exact path="/Privacy" element={<Privacy/>}></Route>
        <Route exact path="/terms" element={<TermsOfUse/>}></Route>
        <Route exact path="/form" element={<UploadForm/>}></Route>

      </Routes>
{/* <Projects/> */}
    </Router> 
    </div>
    </div>
  );
}

export default App;
