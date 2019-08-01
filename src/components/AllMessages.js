import React, { Component } from "react";
import SendMessage from "./SendMessage";
import DisplayOneMessage from "./DisplayOneMessage";

class AllMessages extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(messages => {
        this.setState({ messages: messages });
      });
  }

  addMessages = () => {
    fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(messages => {
        this.setState({ messages: messages });
      });
  };

  render() {
    return (
      <div className="container">
        <SendMessage addMessages={this.addMessages} />
        <div className="container">
          {this.state.messages.map((message, index) => {
            return (
              <div className="post card" key={index}>
                <DisplayOneMessage message={message} />
                <button>delete</button>
                <button>edit</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default AllMessages;
