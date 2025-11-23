
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import "./Create.css";
import { useAuth } from '../../provider/AuthContext';
import api from "../../api";
function Create() {
    const [name,setName]= useState('');
    const [price,setPrice]= useState('');
    const [category,setCategory]= useState('');
    const [image,setImage]= useState(null);
    const [uploading,setUploading]= useState(false);

    const { user }= useAuth();
    const navigate= useNavigate();
    const handleUpload = async () => {
      if (!user) {
        alert("Please login to continue");
        return;
      }
      
      if (!image) {
        alert("Please select an image");
        return;
      }
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("user", user.id);
      formData.append("image", image);

      try {
        setUploading(true);

        const response = await api.post("/api/upload/", 
          formData
        );

        // if (!response.ok) throw new Error("Upload failed");

        const data= await response.data;
        console.log("Uploaded:", data);
        navigate("/");
      } catch (err) {
        console.error(err);
        alert("Upload failed");
      } finally {
        setUploading(false);
      }
};
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
           
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              placeholder='Enter category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)} />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''} ></img>

          <br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button className="uploadBtn" onClick={handleUpload} disabled={uploading} >{uploading ? 'Uploading...' : "Upload"}</button>

        </div>
      </card>
    </Fragment>
  );
}

export default Create
