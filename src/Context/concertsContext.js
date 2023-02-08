import React, { createContext, useState } from 'react';

export const PostContext = createContext();

const PostContainer = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContainer;
