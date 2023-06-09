import React from 'react';
import { useState, useEffect } from 'react';

const _renderJumbotron = () => (
    <div class="Jumbotron">
        <h1 class="display-4">Postings</h1>
    </div>
 );

const _renderCardHeader = (post) => {
    const {id,title} = post;
    
    return (
        <div className="card-header">
            #{id}{title}
        </div>
    )
};

const _renderCardBody = (post) => {
    const {body} = post;

    return (
        <div className="card-body">
            <p className="card-text">{body}</p>
        </div>
    )
};

const _renderCard = (posts) => (
    <div className="container">
        {posts.slice(0, 15).map((post) => (
            <div className="card" key={post.id}>
                {_renderCardHeader(post)}
                {_renderCardBody(post)}
            </div>
        ))}
    </div>
)

const usePostList = (setPosts) => {

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=30")
      .then(response => response.json())
      .then(result => setPosts(result));
  }, []);

 }

const App = () => {
    const [posts, setPosts] = useState([]);
    usePostList(setPosts);

    return (
        <div className="container">
            {_renderJumbotron()}
            {_renderCard(posts)}
        </div>
    )
}

export default App;