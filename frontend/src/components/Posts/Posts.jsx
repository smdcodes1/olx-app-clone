import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import Heart from "../../assets/Heart";
import "./Posts.css";
import { usePost } from '../../provider/PostContext';
import api from '../../api';
function Posts() {
    const [products,setProducts]= useState([]);
    const navigate= useNavigate();
    const {setPostDetails}= usePost();
    useEffect(() => {
    const fetchProducts = async () => {
      try {
       const response= await api.get("/api/uploaded-posts/");
       const posts= await response.data;
       setProducts(posts);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };

    fetchProducts();
    }, []);
    const recommendedItems = [
    { name: 'YAMAHA R15V3', category: 'Two Wheeler', price: 250000, image: "../../../Images/R15V3.jpg", time: '20/11/2024',user:""},
    { name: 'Poco F6', category: 'Mobile', price: 29000, image: "../../../Images/poco3.jpg", time: '11/01/2025',user:""},
    { name: 'Poco F4', category: 'Mobile', price: 20000, image: "../../../Images/poco5.jpg", time: '19/06/2025',user:""},

    ];
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            products.map((product, index) => (
              <div
                className="card" key={index} onClick={() => {
                  setPostDetails(product);
                  navigate("/view");
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.image} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>{new Date(product.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {recommendedItems.map((val, index) => {
            return <div className="card" key={index} onClick={()=> {
              setPostDetails(val);
              navigate('/view');
            }} >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={`${val.image}`} alt="No Image" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {val.price}</p>
                <span className="kilometer">{val.category}</span>
                <p className="name">{val.name}</p>
              </div>
              <div className="date">
                <span>{val.time} </span>
              </div>
            </div>
          })}
         
        </div>
      </div>
    </div>
  );
}

export default Posts
