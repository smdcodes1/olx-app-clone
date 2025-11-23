import '../App.css';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Posts from "../components/Posts/Posts";
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthContext';
import api from '../api';
function HomePage() {
  const navigate= useNavigate();
  const { user,setUser }= useAuth();
  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      navigate("/login");
      return;
    }

    api
      .get("/api/user/register/")
      .then((res) => setUser(res.data))
      .catch(() => {

        handleLogout();
      });
  }, []);
  const handleLogout= ()=> {
   localStorage.removeItem("access");
   localStorage.removeItem("refresh");
   navigate('/login');
   
  };
  return (
    <div className='App'>
     <Header />
     <Banner />
     <Posts />
     <Footer />
      
    </div>
  );
}

export default HomePage
