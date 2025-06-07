import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import AboutUs from './components/about-us';
import Footer from "./components/Footer";
import HowWeWork from './pages/HowWeWork';
import BookAppointment from './pages/BookAppointment'; 
import CallUs from './pages/CallUs';
import LoansPage from './pages/Loans';

const Home = () => (
  <>
    <Hero />
    <HowWeWork />
    <AboutUs />
    <Footer />
    <ToastContainer />
  </>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/call-us" element={<CallUs />} />
      </Routes>
    </>
  );
}

export default App;