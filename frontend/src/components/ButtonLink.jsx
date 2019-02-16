import { Button } from "antd";
import React from "react";
import { withRouter } from "react-router-dom";

// this also works with react-router-native

const ButtonLink = withRouter(({ staticContext, url, history, ...props }) => (
  <Button
    type="button"
    // null={props.staticContext}
    {...props}
    onClick={() => {
      history.push(url);
    }}
  >
    {props.children}
  </Button>
));

export default ButtonLink;
