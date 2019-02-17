import React from "react";

export default class CurrentTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      timer: setInterval(this.handleTick, 1000)
    };
  }

  handleTick = () => {
    this.setState({ time: new Date() });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.time && this.state.time.toLocaleTimeString()}
      </React.Fragment>
    );
  }
}
