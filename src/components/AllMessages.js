import React, { Component } from "react";
import SendMessage from "./SendMessage";
import DisplayOneMessage from "./DisplayOneMessage";

class AllMessages extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  fetchMessages = () => {
    fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(messages => {
        this.setState({ messages: messages });
      });
    console.log("updated");
  };

  componentDidMount() {
    this.fetchMessages();
    console.log("componentDidMount");
    this.timer = setInterval(() => this.fetchMessages(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  addMessages = () => {
    this.fetchMessages();
  };

  onClickDelete = id => {
    console.log(id);
    fetch(`http://localhost:3000/messages/${id}`, {
      method: "delete"
    })
      .then(response => response.json())
      .then(json => console.log(json));
    this.fetchMessages();
  };

  render() {
    return (
      <div className="container">
        <SendMessage addMessages={this.addMessages} />
        <div className="container">
          {this.state.messages.map((message, index) => {
            return (
              <div className="post card" key={message.id}>
                <DisplayOneMessage message={message} />
                <button onClick={() => this.onClickDelete(message.id)}>
                  delete
                </button>
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
