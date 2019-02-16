import React from "react";
import { Spin } from "antd";

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
  }

  handleImageErrored() {
    this.setState({ loaded: false });
  }

  render() {
    return (
      <Spin spinning={!this.state.loaded}>
        <img
          src={this.props.imageUrl}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
      </Spin>
    );
  }
}
export default ImageLoader;
