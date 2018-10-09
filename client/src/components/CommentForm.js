import React, { Component } from 'react'

class CommentForm extends Component {
  state = {
    fields: {
      author: '',
      body: '',
    },
  }

  handleClick = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.fields);
  }

  handleChange = (e) => {
    const fields = Object.assign({}, this.state.fields, {
      [e.target.name]: e.target.value,
    })

    this.setState({ fields });
  }

  render() {
    return (
        <form action="" onSubmit={this.handleSubmit}>
          <h2>Post a Comment</h2>
          <div className="input-group">
            <label>Your Name</label>
            <input
              type="text"
              name="author"
              value={this.state.fields.author}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group">
            <label>Your Comment</label>
            <textarea
              name="body"
              value={this.state.fields.body}
              cols="30"
              rows="10"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={this.handleClick}
          >
            Submit
          </button>
        </form>
    );
  }
}

export default CommentForm
