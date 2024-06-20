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

function App() {
  const { scrollYProgress } = useScroll();





  return (
    <>
    <Provider store={store}>


      <NavBar />

      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />


      <LandingPage/>

















    </Provider>

    </>
  );
}

export default App
