import "./Signup.css";
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import Logo from "../../assets/Images/olx-logo.png";
import api from '../../api';
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
function Signup({route}) {
  const [username,setUsername]= useState('');
  const [email,setEmail]= useState('');
  const [phone,setPhone]= useState('');
  const [password,setPassword]= useState('');
  const navigate= useNavigate();
  const [loading,setLoading]= useState(false);
   const handleSubmit=async (e)=> {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(route, { username, password, email, phone });
      navigate("/login");
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
   };

  if (loading) return <LoadingIndicator />;
  return (
   <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            placeholder='Enter username'
            required
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
           />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            placeholder='Enter email'
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            placeholder='Enter phone number'
            required
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            placeholder='Enter password'
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=> navigate('/login')}>Login</a>
      </div>
    </div>
  );
}

export default Signup
