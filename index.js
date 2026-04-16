function openMenu() {
    // 1. Capitalized the 'L' and used the .add() method
    document.body.classList.add("menu--open"); 
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

import Testimonials, { Testimonials } from './Testimonials';

import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. ADD THIS LINE RIGHT HERE:
import Testimonials from './Testimonials'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* 2. DROP YOUR NEW COMPONENT IN HERE: */}
    <Testimonials />

  </React.StrictMode>
);
// This line allows other files to use this component
export default Testimonials;
