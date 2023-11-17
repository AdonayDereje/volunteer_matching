import './App.css';
import React from 'react'
import Header from './components/Header';
import Welcome from './components/Welcome';
import Review from './components/Review';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Review/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
