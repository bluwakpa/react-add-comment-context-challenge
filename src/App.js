import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import CommentsContext from './CommentsContext'
import './App.css';

class App extends Component {
  state = {
    comments: [],
  };

  addComment = (comment, author) => {
    /* change me 
    push to your comments state array. 
    Then wire the addComment function 
    up in context in the value object on line 20
    you will need to change addComment to accept an argument
    the comment addComment = (comment) => {...
    because when you call addComment you will call it like this
    this.context.addComment()
    only you will need to pass the comment as an argument when you call it
    {comment, author} is the object structure I believe*/

    this.state.comments.push('')
  }

  render() {
    return (
      <CommentsContext.Provider
        value={{
          comments: this.context.addComment(comment, author),
        }}
      >
        <div className="App">
          <main>
            <h1>A posty post that posted via POST</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae labore officiis vitae! Quasi maxime, minima a doloribus soluta earum voluptates aspernatur, alias dicta assumenda esse iste repellat et. Cum, quia.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aliquid quis minima quo aperiam similique amet dicta? Cumque libero magnam animi tenetur quis deleniti quisquam eveniet ut beatae molestias? Repudiandae?
            </p>
            <section>
              <CommentList />
              <CommentForm />
            </section>
          </main>
        </div>
      </CommentsContext.Provider>
    );
  }
}

export default App;
