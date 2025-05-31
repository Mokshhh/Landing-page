import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import AboutUs from './components/about-us';
import Footer from "./components/Footer";
import MainPage from './pages/MainPage';
import HowWeWork from './pages/HowWeWork';
import { Route, Routes } from 'react-router-dom';
import BookAppointment from './pages/BookAppointment'; 
import CallUs from './pages/CallUs'



function App() {
  return (
<>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MainPage />
              <HowWeWork />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route path="/BookAppointment" element={<BookAppointment />} />
          <Route path="/CallUs" element={<CallUs />} />

      </Routes>
    </>
  );
}

export default App;
