import React, { Component } from 'react';
// import PostData from '../data/posts.json';

class PostDetail extends Component {

    constructor(props){
        super(props);
        // this will allow us to get the props inside the method.
        this.myTitleWasClicked = this.myTitleWasClicked.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
        this.toggleContent = this.toggleContent.bind(this);
        this.handleRemoveContentButton = this.handleRemoveContentButton.bind(this);
        this.state = {
            showContent: true
        }
    }

    handleRemoveContentButton(event){
        if (this.props.didHandleRemove){
            this.props.didHandleRemove(this.props.post)

        }


    }


    myTitleWasClicked(event){
        event.preventDefault();
        const dataCallBack = this.props.dataCallBack;
        if (dataCallBack !== undefined) {
            dataCallBack('Hello World...')
        }
    }

    toggleContent(event){
        event.preventDefault();
        this.setState({showContent: !this.state.showContent})
    }

    buttonClicked(event){
        event.preventDefault();
        const displayButtonClicked = this.props.displayButtonClicked;
        displayButtonClicked("The button is clicked now......")
    }
    render() {
    const post = this.props.post;
    const {showContent} = this.state;

    return (
        <div>
            <h4 onClick={this.myTitleWasClicked}>{post.title}</h4>
            { showContent === true ? <p> {post.content}</p> : " " }
            <button onClick={this.buttonClicked}> click me </button>
            { showContent === true ? <button onClick={this.toggleContent}>Hide information </button> :
                <button onClick={this.toggleContent}> Show information </button>
            }
            <button onClick={this.handleRemoveContentButton}> Remove information </button>
        </div>
    );
    }
}

export default PostDetail;
