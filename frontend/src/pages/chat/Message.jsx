import React from 'react'
import {
    Comment, Icon, Tooltip, Avatar,
  } from 'antd';
import moment from 'moment';

const Message = (props) => {
    const isWatson = props.messageAuthor
    if(isWatson == "watson"){
        return (
            <div>
                    <Comment
                        author={<a>Watson</a>}
                        avatar={(
                        <Avatar
                            src="https://cdn.worldvectorlogo.com/logos/ibm-watson.svg"
                            alt="Watson"
                        />
                        )}
                        content={(
                        <p> {props.messageContent} </p>
                        )}
                        datetime={(
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                        )}
                    />
            </div>
        )
    }
    else{
        return (
            <div>
                    <Comment
                        author={<a>You</a>}
                        content={(
                        <p> {props.messageContent} </p>
                        )}
                        datetime={(
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                        )}
                    />
            </div>
        )
    }
}

export default Message