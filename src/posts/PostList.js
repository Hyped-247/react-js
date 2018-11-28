import React, { Component } from 'react';
import PostData from '../data/posts.json';
import PostDetail from './PostDetail';

class PostList extends Component {
  constructor(props){
    super(props);
    // Create this for every method that you call inside your render method.
    this.handleDataCallBack = this.handleDataCallBack.bind(this)
    this.displayButtonClicked = this.displayButtonClicked.bind(this)
    this.HandlePostRemove = this.HandlePostRemove.bind(this)
  }
  handleDataCallBack(textMsg){
    alert(textMsg);
    console.log(this)
  }
  displayButtonClicked(textButtonMsg){
    alert(textButtonMsg);
  }
  HandlePostRemove(postItem){
      let currentPostList = this.state.postList;
      currentPostList.pop(postItem);
      this.setState({
          postItem: currentPostList
      })
  }

  render() {
    return (
      <div>
        <h4>Hello World</h4>
          {PostData.map((item, index)=>{
              return <PostDetail
                  post={item}
                  key={index}
                  didHandleRemove={this.HandlePostRemove}
                  dataCallBack={this.handleDataCallBack}
                  displayButtonClicked={this.displayButtonClicked}
              />;
          })}
      </div>
    );
  }
}

export default PostList;
