import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from "./components/Footer";
import MainPage from './pages/MainPage';
import HowWeWork from './pages/HowWeWork';


function App() {
  return (
    
    <>
      <Navbar />
      <MainPage/>
      <HowWeWork/>
      <Hero />
      <Services />
      <Footer />
    </>
    
  );
}

export default App;
