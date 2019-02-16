import "./Patients.css";

import { Avatar, Card, List } from "antd";

import { Link } from "react-router-dom";
import React from "react";

export default function Patients({ users, loading }) {
  return (
    <Card className="smallcard">
      <List
        itemLayout="horizontal"
        dataSource={users}
        loading={loading}
        renderItem={user => (
          <Link to={"/patients/" + user.id}>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon="user" />}
                title={user.first_name + " " + user.last_name}
                description={user.email}
              />
            </List.Item>
          </Link>
        )}
      />
    </Card>
  );
}
