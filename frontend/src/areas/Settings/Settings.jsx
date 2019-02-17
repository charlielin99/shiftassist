import "./Settings.scss";

import { Button, Divider, Form, Input } from "antd";

import React from "react";
import { getFullName } from "../../utils/utils";

export default function Settings({ user }) {
  console.log(user);
  const name = getFullName(user);

  const formItemLayout = {
    labelCol: {
      //   xs: { span: 0 },
      sm: { span: 0 }
    },
    wrapperCol: {
      //   xs: { span: 0 },
      sm: { span: 0 }
    }
  };

  return (
    <div className="settings">
      <div className="row">
        <h1>Settings</h1>
        <Button className="right" type="primary">
          Edit
        </Button>
      </div>
      <Divider orientation="right">Basic Info</Divider>
      {/* <div className="row">
        <p className="left">Name:</p>
        <p className="right">{name}</p>
      </div>
      <div className="row">
        <p className="left">Email:</p>
        <p className="right">{user.email}</p>
      </div> */}
      <Form layout="inline">
        <Form.Item label="Name" {...formItemLayout}>
          <Input value={name} />
        </Form.Item>

        <Form.Item label="Email" {...formItemLayout}>
          <Input value={user.email} />
        </Form.Item>
      </Form>
    </div>
  );
}
