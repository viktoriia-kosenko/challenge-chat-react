import React, { Component } from "react";
class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }
  componentDidMount() {
    console.log(this.props.searchParam);
    var url =
      "https://secret-hollows-92590.herokuapp.com/messages/search?from=" +
      this.props.searchParam.from +
      "&text=" +
      this.props.searchParam.text;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(messages => this.setState({ messages: messages }));
  }
  render() {
    return (
      <div>
        <h3>messages u were searching for ...</h3>
        {!this.state.messages.length ? (
          <p>Sorry! Quote with the given params was not found</p>
        ) : (
          this.state.messages.map((q, index) => (
            <li key={index}>
              <q>{q.from}</q>
              {q.text}
            </li>
          ))
        )}
      </div>
    );
  }
}
export default SearchResult;
