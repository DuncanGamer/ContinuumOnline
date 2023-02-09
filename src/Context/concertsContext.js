import React, { createContext, useState } from 'react';

const PostContext = createContext();

export const usePostContext = () => {
    const context = React.useContext(PostContext);
    if (context === undefined) {
        throw new Error('usePostContext must be used within a PostContainer');
    }
    return context;
}

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getConcerts = async () => {}

  
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
