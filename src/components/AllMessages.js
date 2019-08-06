import React, { Component } from "react";
import SendMessage from "./SendMessage";
import DisplayOneMessage from "./DisplayOneMessage";
import EditableMessage from "./EditableMessage";

class AllMessages extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], selectedEditMessageId: null };
  }

  fetchMessages = () => {
    fetch("https://secret-hollows-92590.herokuapp.com/messages")
      .then(res => res.json())
      .then(messages => {
        this.setState({ messages: messages });
      });
  };

  componentDidMount() {
    this.fetchMessages();
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
    fetch(`https://secret-hollows-92590.herokuapp.com/messages/${id}`, {
      method: "delete"
    });

    this.fetchMessages();
  };

  editMessage = id => {
    this.setState({
      selectedEditMessageId: id
    });
  };

  saveAndUppdate = () => {
    this.setState({
      selectedEditMessageId: null
    });
    this.fetchMessages();
  };
  render() {
    return (
      <div className="container">
        <SendMessage addMessages={this.addMessages} />
        <div className="container">
          {this.state.messages.map(message => {
            if (message.id === this.state.selectedEditMessageId) {
              return (
                <div className="post card" key={message.id}>
                  <EditableMessage
                    message={message}
                    saveAndUppdate={this.saveAndUppdate}
                  />
                </div>
              );
            } else {
              return (
                <div className="post card" key={message.id}>
                  <DisplayOneMessage message={message} />
                  <button onClick={() => this.onClickDelete(message.id)}>
                    delete
                  </button>
                  <button onClick={() => this.editMessage(message.id)}>
                    edit
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
export default AllMessages;
