import React, { Component } from 'react';
import PostData from '../data/posts.json';
import PostDetail from './PostDetail';

class PostList extends Component {
  render() {
    return (
      <div>
        <h4>Hello World</h4>
          {PostData.map((item, index)=>{
              return <PostDetail post={item} key={index} />;
          })}
      </div>
    );
  }
}

export default PostList;
