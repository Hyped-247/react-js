import React, { Component } from 'react';
// import PostData from '../data/posts.json';

class PostDetail extends Component {

    constructor(props){
        super(props);
        // this will allow us to get the props inside the method.
        this.myTitleWasClicked = this.myTitleWasClicked.bind(this);
    }

    myTitleWasClicked(event){
        event.preventDefault();
        alert(this.props)
    }

    render() {
      const post = this.props.post;
    return (
        <div>
            <h4 onClick={this.myTitleWasClicked}>{post.title}</h4>
            <p> {post.content}</p>
        </div>
    );
    }
}

export default PostDetail;
