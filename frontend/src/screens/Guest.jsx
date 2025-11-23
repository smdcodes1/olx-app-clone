import '../App.css';
import React from 'react'
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Posts from '../components/Posts/Posts';
import Footer from '../components/Footer/Footer';

function Guest() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Guest
