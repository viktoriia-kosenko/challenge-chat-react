import React from "react";

function DisplayOneMessage({ message }) {
  return (
    <div className="card-content">
      <span>From: {message.from}</span>
      <p className="card-title">{message.text}</p>
      <p>{message.timeSent}</p>
    </div>
  );
}
export default DisplayOneMessage;
