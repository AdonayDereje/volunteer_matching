import './App.css';
import React from 'react'
import Header from './components/Header';
import Welcome from './components/Welcome';
import Review from './components/Review';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import EmailUs from './components/EmailUs'

function App() {

  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Review/>
      <ContactUs/>
      <EmailUs/>
      <Footer/>
    </div>
  );
}

export default App;
