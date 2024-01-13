// BlogsContext.js
import React, { createContext, useContext, useState } from 'react';

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, blog]);
  };

  return (
    <BlogsContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogsContext.Provider>
  );
};

export const useBlogs = () => {
  return useContext(BlogsContext);
};
