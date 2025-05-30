import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import AboutUs from './components/about-us';
import Footer from "./components/Footer";
import MainPage from './pages/MainPage';
import HowWeWork from './pages/HowWeWork';


function App() {
  return (
    
    <>
      <Navbar />
      <Hero />
      <MainPage/>
      <HowWeWork/>
      
      <AboutUs />
      <Footer />
    </>
    
  );
}

export default App;
