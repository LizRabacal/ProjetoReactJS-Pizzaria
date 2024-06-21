import { useState, useEffect } from 'react'
import {
  motion,
  useScroll,
} from "framer-motion";
import './App.css'
import NavBar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  const { scrollYProgress } = useScroll();





  return (
    <>
      <BrowserRouter>

    <Provider store={store}>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />


      <NavBar />


          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='/Agenda' element={<LandingPage />} />
          </Routes>








<h1 id="section1">aaaaaaaaaaaa</h1>









    </Provider>
      </BrowserRouter>

    </>
  );
}

export default App
