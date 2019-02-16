import { Button } from "antd";
import React from "react";
import { withRouter } from "react-router-dom";

// this also works with react-router-native

const ButtonLink = withRouter(props => (
  <Button
    type="button"
    {...props}
    null={props.staticContext}
    onClick={() => {
      props.history.push(props.url);
    }}
  >
    {props.children}
  </Button>
));

export default ButtonLink;
