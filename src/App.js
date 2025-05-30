import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from "./components/Footer";
import MainPage from './pages/MainPage';


function App() {
  return (
    
    <>
      <Navbar />
      <MainPage/>
      <Hero />
      <Services />
      <Footer />
    </>
    
  );
}

export default App;
