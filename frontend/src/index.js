
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/Home/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import AboutPage from './landing_page/about/AboutPage'
import SignUp from './landing_page/signup/SignUp'
import PricingPage from './landing_page/pricing/PricingPage'
import PRoductPage from './landing_page/product/PRoductPage'
import SupportPage from './landing_page/support/SupportPage'
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* Define your routes here */}
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/pricing' element={<PricingPage/>} />
        <Route path='/product' element={<PRoductPage/>} />
        <Route path='/support' element={<SupportPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  // <React.StrictMode>
  //   <HomePage/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

