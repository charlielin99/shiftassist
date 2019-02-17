import React, { Component } from "react";
import { Switch, Row, Col, InputNumber, Button } from "antd";

import QRCode from "react-qr-code";

class QrCheckin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loged_one: false,
      loged_two: false
    };
  }

  changeOne = e => {
    var loged_one = !this.state.loged_one;
    this.setState({ loged_one });
    console.log(loged_one);
  };
  changeTwo = e => {
    var loged_two = !this.state.loged_two;
    this.setState({ loged_two });
    console.log(loged_two);
  };

  render() {
    return (
      <div className="QrCheckin">
        <Row>
          <Col span={1} />
          <Col align="center" span={22}>
            <Row>
              <Col span={12}>Your Switch: </Col>
              <Col span={12}>Shift Switch: </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Switch
                  onChange={this.changeOne}
                  checked={this.state.loged_one}
                />
              </Col>
              <Col span={12}>
                <Switch
                  onChange={this.changeTwo}
                  checked={this.state.loged_two}
                />
              </Col>
            </Row>
            <p />
            <QRCode value="Nice Job Alex" />
            <h2>_</h2>
            <InputNumber min={111} max={999} defaultValue={723} />
            <br />
            <p />
            <Button type="primary">Primary</Button>
            <p>.</p>
            <h2>
              1. Start by finding the person taking over your shift and having
              them scan your code.
            </h2>
            <h2>2. Scan their code.</h2>
            <h2>3. Once both of you are verified you are good to go!</h2>
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}

export default QrCheckin;
