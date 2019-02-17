import React, { Component } from "react";
import Message from "./Message";
import { Input, Button } from "antd";

class Messanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { id: "1", author: "user", content: "what do dogs look like" },
        { id: "2", author: "watson", content: "shut up fool" },
        { id: "3", author: "user", content: "that's mean" },
        { id: "4", author: "watson", content: "didn't i say to shut up" }
      ],
      currentMessage: ""
    };
  }
  addTodo = (author, content) => {
    // message.id =
    const message = {
      id: Math.floor(Math.random() * 10),
      author: author,
      content: content
    };
    console.log(message);

    this.setState({
      messages: [...this.state.messages, message]
    });
  };
  setMessage = currentMessage => {
    this.setState({
      currentMessage: this.currentMessage,
      message: currentMessage
    });
  };
  handleMessageSubmit = e => {
    console.log("handling message even:", e);

    this.addTodo("user", this.state.currentMessage);
    this.setState({ currentMessage: "" });
  };
  handleMessageChange = e => {
    console.log(e);

    this.setState({ currentMessage: e.target.value });
  };
  handleKeyPress = e => {
    if (e.charCode == 13) {
      console.log("entered");

      this.handleMessageSubmit();
    }
  };
  render() {
    return (
      <div className="Messanger">
        <ul>
          {this.state.messages.map((item, idx) => (
            <Message
              key={idx}
              messageContent={item.content}
              messageAuthor={item.author}
            />
          ))}
        </ul>
        <div className="white">
          <Input
            placeholder="Basic usage"
            value={this.state.currentMessage}
            onChange={this.handleMessageChange}
            onKeyPress={this.handleKeyPress}
          />
          <p> </p>
          <Button type="primary" onClick={this.handleMessageSubmit}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Messanger;
