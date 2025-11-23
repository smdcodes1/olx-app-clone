import {useNavigate} from "react-router-dom";
import React from 'react'
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Arrow";
import Arrow from '../../assets/Arrow';
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import caretIcon from "../../assets/Images/caret_icon.svg";
import "./Header.css";
import { useAuth } from "../../provider/AuthContext";
function Header() {
    const navigate= useNavigate();
    const { user }= useAuth();
    const handleLogout= ()=> {
     localStorage.removeItem('access');
     localStorage.removeItem('refresh');
     navigate('/login');
    };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {/* {user ? user?.username : "Login"} */}
          <a onClick={()=> navigate("/login")} style={{cursor:'pointer'}}>{user ? user?.username : 'Login'}</a>
          <hr />
          <div className='dropdown'>
            {user ? <p onClick={handleLogout}>Sign out of OLX</p> : <p onClick={()=> navigate("/login")}>Sign in of OLX</p>}
          </div>
        </div>
        <div className="sellMenu" onClick={()=> navigate('/create')}>
          <SellButton ></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
