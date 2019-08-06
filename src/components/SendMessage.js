import React, { Component } from "react";

class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { from: "", text: "" };
  }
  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    var requestBody = this.state;
    var postRequestParameters = {
      body: JSON.stringify(requestBody),
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    };

    fetch(
      "https://secret-hollows-92590.herokuapp.com/messages",
      postRequestParameters
    )
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then(res => {
        this.setState({ from: "", text: "" });
        this.props.addMessages();
      })
      .catch(err => {
        err.json().then(json => alert(json.error));
      });
  };

  render() {
    return (
      <div className="container">
        <h5 className="senter">if you want, send a message ...</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            name="from"
            id="from"
            type="text"
            placeholder="write your name"
            onChange={this.handleOnChange}
            value={this.state.from}
          />
          <input
            name="text"
            type="text"
            placeholder="write your message..."
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}
export default SendMessage;
