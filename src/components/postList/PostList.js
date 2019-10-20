import React from 'react';
import { Link } from 'react-router-dom';
import './PostList.scss';

const PostList = ({ posts }) => {
    console.log('posts', posts)
    const {_tail} = posts
    console.log('posts', _tail)


  return (
    <div className="PostList">
      <div className="post-item">
        <Link to="/posts/1" className="title">
          title
        </Link>
        <div className="meta">
          <span className="username">
            by <b>username</b>
          </span>
        </div>
        <p>body</p>
      </div>
    </div>
  );
};

export default PostList;