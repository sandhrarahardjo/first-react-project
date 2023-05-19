import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }}

componentDidMount() {
  const url = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=30";

  fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }
    
render() {
  const { posts } = this.state;
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Postings</h1>
        </div>
        {posts.slice(0, 15).map((post) => (
          <div className="card" key={post.id}>
            <div className="card-header">
              #{post.id} {post.title}
            </div>
            <div className="card-body">
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default App;