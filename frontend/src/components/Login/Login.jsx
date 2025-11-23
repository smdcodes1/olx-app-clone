import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Images/olx-logo.png";
import api from '../../api';
import {ACCESS_TOKEN,REFRESH_TOKEN} from "../../constants";
import { useAuth } from "../../provider/AuthContext";
import "./Login.css";
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
function Login({route}) {
  const [username,setUsername]= useState('');
  const [password,setPassword]= useState('');
  const navigate= useNavigate();
  const [loading,setLoading]= useState(false);
  const handleLogin=async (e)=> {
   setLoading(true);
   e.preventDefault();
   try {
    const res = await api.post(route,{ username, password });
    // console.log(JSON.stringify(res));
    localStorage.setItem(ACCESS_TOKEN, res.data.access);
    localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

    navigate("/");
   } catch (err) {
     alert(err);
   } finally {
    setLoading(false);
   }
  };
  const RegisterAndLogout= ()=> {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate('/signup');
  };

  if (loading) return <LoadingIndicator />;
  return (
     <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            placeholder="Enter your username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button style={{cursor:"pointer"}}>Login</button>
        </form>
        <a onClick={() => RegisterAndLogout()}>Signup</a>
        <br />
        <div className='form-switch'>
          <p>Signin as<span onClick={()=> navigate('/guest')}>Guest Now</span></p>
        </div>
      </div>
      
    </div>
  );
}

export default Login
