import React from "react";
import { Comment, Icon, Tooltip, Avatar } from "antd";
import moment from "moment";

const Message = props => {
  const isWatson = props.messageAuthor == "watson";

  return (
    <div>
      <Comment
        author={<a>{isWatson ? "Watson" : "You"}</a>}
        avatar={
          isWatson ? (
            <Avatar
              src="https://cdn.worldvectorlogo.com/logos/ibm-watson.svg"
              alt="Watson"
            />
          ) : (
            undefined
          )
        }
        content={<p> {props.messageContent} </p>}
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    </div>
  );
};

export default Message;
