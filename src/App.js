import React, { useState, useEffect } from 'react';

import JumbotronComponent from './Components/Jumbotron';
import CardComponent from './Components/Card/Card.component';
import Constants from './Constants';

const usePostList = (setPosts) => {
  const url = Constants.API_URL;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => setPosts(result))
  }, []);
};

const App = () => {
  const [posts, setPosts] = useState([]);

  usePostList(setPosts);


  /*
    di dalam App, kita manggil 2 Components:
    1. Jumbotron component --> tanpa kirim arguments / props
    2. Card component --> kirim posts sebagai props.
    
    nantinya di Card akan terima --> 

    props: {
      postListProps: // isi dari posts
    }
  */
  return (
    <div className="container">
      <JumbotronComponent />
      <CardComponent postListProps={posts} />
    </div>
  );
};

export default App;
