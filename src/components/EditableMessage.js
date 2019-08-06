import React, { Component } from "react";
class EditableMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: this.props.message.from,
      text: this.props.message.text
    };
  }

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSave = event => {
    //after i caught modified message and author name in state, i pass this info to the server
    event.preventDefault();
    const id = this.props.message.id;
    const url = `http://localhost:3000/messages/${id}`;
    const updateMessage = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(this.state)
    };

    fetch(url, updateMessage)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then(res => {
        this.props.saveAndUppdate();
      })
      .catch(err => {
        err.json().then(json => alert(json.error));
      });
  };

  render() {
    return (
      <div className="post card">
        <form className="card-content" onSubmit={this.handleSave}>
          <input
            name="from"
            id="from"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.from}
          />
          <input
            name="text"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default EditableMessage;
