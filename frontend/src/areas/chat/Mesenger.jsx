import React, { Component } from "react";
import Message from "./Message";
import { Input, Button } from "antd";
import axios from "axios";

class Messanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { id: 1, author: "watson", content: "What was the patients name?" }
      ],
      currentMessage: "",
      sessId: ""
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/requestSession`).then(res => {
      const sessId = res.data;
      console.log(sessId);
      this.setState({ sessId });

      axios
        .post("http://localhost:8080/ask", {
          sessionId: this.state.sessId,
          data: "John"
        })
        .then(function(response) {
          // console.log(response.data);
          this.addTodo("watson", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
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

  handleMessageSubmit = e => {
    var self = this;
    axios
      .post("http://localhost:8080/ask", {
        sessionId: this.state.sessId,
        data: this.state.currentMessage
      })
      .then(function(response) {
        // console.log(response.data);
        self.addTodo("watson", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    // console.log(this.state.watson);
    this.addTodo("user", this.state.currentMessage);
    // console.log(this.state.messages);
    this.setState({ currentMessage: "" });
  };
  handleMessageChange = e => {
    this.setState({ currentMessage: e.target.value });
  };
  handleKeyPress = e => {
    if (e.charCode == 13) {
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
