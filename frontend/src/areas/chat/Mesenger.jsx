import { Button, Col, Input, Row } from "antd";
import React, { Component } from "react";

import Message from "./Message";
import axios from "axios";

const baseUrl = "https://ancient-coast-23455.herokuapp.com";
class Messanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { id: 1, author: "watson", content: "What was the patients name?" }
      ],
      responses: [],
      texts: [],
      currentMessage: "",
      sessId: ""
    };
  }

  componentDidMount() {
    axios.get(`${baseUrl}/requestSession`).then(res => {
      const sessId = res.data;
      console.log(sessId);
      this.setState({ sessId });

      axios
        .post(`${baseUrl}/ask`, {
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

  convertToObject = () => {
    if (this.state.messages.length > 24) {
      var finalObject = {};
      var summary = "";
      //patient name
      finalObject["id"] = this.state.responses[0];

      //doctor name
      finalObject["doctorId"] = this.state.responses[1];

      // surgery date
      finalObject["lastSurgeryDate"] = this.state.responses[4];

      finalObject["vitalState"] = this.state.responses[8];

      finalObject["lastTime"] = this.state.responses[9];

      finalObject["status"] = this.state.responses[6];

      finalObject["statusDetails"] = this.state.messages[15].content;

      var count = 0;
      var flag = 0;
      for (var i = 0; i < this.state.messages.length; ++i) {
        console.log(
          "What medication are they taking for this?" ===
            this.state.messages[i].content
        );
        if (
          "What medication are they taking for this?" ===
          this.state.messages[i].content
        ) {
          if (flag == 0) {
            flag = i;
          }
          count++;
        }
      }

      console.log(flag);
      console.log(count);
      console.log(flag + 6 * count);
      if (flag != 0 && this.state.messages.length > flag + 6 * count) {
        var painLocs = [];
        var painMed = [];
        for (var i = 0; i < count; i++) {
          console.log(this.state.messages[flag + 6 * i].content);
          painLocs.push(this.state.messages[flag + -1 + 6 * i].content);
          painMed.push(this.state.messages[flag + 1 + 6 * i].content);
        }

        finalObject["painLocation"] = painLocs;
        finalObject["painMedication"] = painMed;
      }
      console.log("Final object params: ");
      console.log(finalObject);
    } else {
      console.log("Yes");
    }
  };

  addValue = response => {
    // message.id =
    console.log("Responses: ");
    console.log(this.state.responses);
    this.setState({
      responses: [...this.state.responses, response]
    });
  };

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
      .post(`${baseUrl}/ask`, {
        sessionId: this.state.sessId,
        data: this.state.currentMessage
      })
      .then(function(response) {
        // console.log(response.data);
        self.addTodo("watson", response.data[0]);
        self.addValue(response.data[1]);
      })
      .catch(function(error) {
        console.log(error);
      });

    // console.log(this.state.watson);
    this.addTodo("user", this.state.currentMessage);
    // console.log(this.state.messages);
    if (this.state.messages.length > 13) {
      console.log("Starts Here: ______________");
      this.convertToObject();
    }
    this.setState({ currentMessage: "" });
    console.log(this.state.messages);
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
        <Row>
          <Col span={1} />
          <Col span={22}>
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
              <Row>
                <Col span={1} />
                <Col span={22} align="center">
                  <Input
                    placeholder="Start Conversing with Watson"
                    value={this.state.currentMessage}
                    onChange={this.handleMessageChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </Col>
                <Col span={1} />
              </Row>
              <p> </p>
              <Row>
                <Col align="center">
                  <Button type="primary" onClick={this.handleMessageSubmit}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}

export default Messanger;
