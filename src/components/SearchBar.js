import React, { Component } from "react";
import DisplayOneMessage from "./DisplayOneMessage";
//import SearchResults from "./SearchResults";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      from: "",
      displaySearchResult: false,
      messages: []
    };
  }

  handleSearchInput = event => {
    this.setState({
      [event.target.id]: event.target.value,
      messages: [],
      displaySearchResult: false
    });
  };

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
    const url = `http://localhost:3000/messages/search?text=${
      this.state.text
    }&from=${this.state.from}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(messages =>
        this.setState({ messages: messages, displaySearchResult: true })
      )
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <h4 className="center">To find a message ...</h4>
        <form onSubmit={this.handleSubmit} className="s">
          <div className="">
            <input
              onChange={this.handleSearchInput}
              type="text"
              id="from"
              className=""
              placeholder="from"
            />

            <input
              onChange={this.handleSearchInput}
              type="text"
              id="text"
              className=""
              placeholder="text"
            />
            <button className="">Search</button>
          </div>
        </form>
        {!this.state.displaySearchResult ? (
          <h5>Your search result will be here ...</h5>
        ) : (
          <div className="container">
            {!this.state.messages.length ? (
              <div className="container">
                <h5>Sorry, no result</h5>
              </div>
            ) : (
              this.state.messages.map(message => {
                return (
                  <div className="post card" key={message.id}>
                    <DisplayOneMessage message={message} />
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Search;
