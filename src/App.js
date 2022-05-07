import React from 'react';
import Footer from './components/footer/Footer'
import Best from './components/best/Best'
import Featured from './components/featured/Featured'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
function App() {
  return (
    <>
    <Navbar />
    <Hero /> 
    <Best />
    <Featured />
    <Footer/>
    </>
  );
}

export default App;
