import "./View.css";
import React, { useEffect, useState } from 'react'
import { usePost } from '../../provider/PostContext';

function View() {
    // const [userDetails,setUserDetails]= useState(null);
    const {postDetails}= usePost();
    
    useEffect(()=> {
      console.log(postDetails.image);
    },[]);

  return (
     <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.image}
          alt="No image available"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt && postDetails.createdAt.toDate().toLocaleDateString()}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{postDetails ? postDetails.user.username : 'Name'}</p>
          <p>Phone Number</p>
        </div>
      </div>
    </div>
  );
}

export default View
