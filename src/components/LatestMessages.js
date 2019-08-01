import React, { Component } from "react";
import DisplayOneMessage from "./DisplayOneMessage";

class DisplayMassages extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }
  componentDidMount() {
    fetch("http://localhost:3000/messages/latest")
      .then(res => res.json())
      .then(messages => {
        this.setState({ messages: messages });
      });
  }

  render() {
    return (
      <div className="container">
        <h4 className="center">Latest messages</h4>
        <div className="container">
          {this.state.messages.map((message, index) => {
            return (
              <div className="post card" key={index}>
                <DisplayOneMessage message={message} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DisplayMassages;
