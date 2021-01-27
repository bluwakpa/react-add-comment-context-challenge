/* 
React Add Comment Context Challenge
This app has a form that submits comments to a blog post. 
The form is only half implemented with context.

Finish the implementation of the form and context.
---------------------------------------------
App.js
addComment = () => {
    // change me
}
CommentsContext.Provider
        value={{
          comments: this.state.comments,
---------------------------------------------
addComment = (comment) => {
    console.log('addComment: ',comment);
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
CommentsContext.Provider
        value={{
          comments: this.state.comments,
          addComment: this.addComment,
---------------------------------------------
CommentForm.js
handleSubmit = (ev) => {
    ev.preventDefault()
    const { author, comment } = ev.target

    //change code

    console.log({
        author: author.value,
        comment: comment.value,
      })
  
      author.value = ''
      comment.value = ''
    }
---------------------------------------------
this.context.addComment({
      author: author.value,
      comment: comment.value,
})
---------------------------------------------
*/