import React from 'react';

import './Card.component.style.css';

const _renderCardHeader = (post) => {
    const { id, title } = post;

    return (
        <div className="card-header">
            #{id} {title}
        </div>
    )
};

const _renderCardBody = (post) => (
    <div className="card-body">
        <p className="card-text">{post.body}</p>
    </div>
)

// component that getting argument (props) passed from App.js
const Card = (props) => {
    const { postListProps } = props;

    return postListProps.slice(0, 15).map((post) => (
        <div className="card" key={post.id}>
            {_renderCardHeader(post)}
            {_renderCardBody(post)}
        </div>
    ));
};

export default Card;
