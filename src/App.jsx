import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './section/Navbar';
import Footer from './section/Footer';
import HomePage from './Homepage';
import MembershipPlans from './pages/MembershipPlans';
import Programs from './pages/Programs';
import Contacts from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
      <div className="overflow-x-hidden">
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/membership" element={<MembershipPlans />} />
          <Route path='/programs' element ={<Programs/>}/>
          <Route path='/contacts' element ={<Contacts/>}/>
        </Routes>
        <Footer />
      </div>
   
  );
};

export default App;