import React, { Component } from 'react';
// import PostData from '../data/posts.json';

class PostDetail extends Component {

    constructor(props){
        super(props);
        // this will allow us to get the props inside the method.
        this.myTitleWasClicked = this.myTitleWasClicked.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    myTitleWasClicked(event){
        event.preventDefault();
        const dataCallBack = this.props.dataCallBack;
        if (dataCallBack !== undefined) {
            dataCallBack('Hello World...')
        }
    }

    buttonClicked(event){
        event.preventDefault();
        const displayButtonClicked = this.props.displayButtonClicked;
        displayButtonClicked("The button is clicked now......")
    }
    render() {
    const post = this.props.post;
    return (
        <div>
            <h4 onClick={this.myTitleWasClicked}>{post.title}</h4>
            <p> {post.content}</p>
            <button onClick={this.buttonClicked}> click me </button>
        </div>
    );
    }
}

export default PostDetail;
