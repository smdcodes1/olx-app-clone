
import { useState } from "react";
import React, { createContext, useContext } from "react";

const PostContext = createContext();

export const usePost = () => useContext(PostContext);


export const PostProvider = ({ children }) => {
    const [postDetails,setPostDetails]= useState(null);
  return (
    <PostContext.Provider value={{ postDetails,setPostDetails }}>
      {children}
    </PostContext.Provider>
  );
};
