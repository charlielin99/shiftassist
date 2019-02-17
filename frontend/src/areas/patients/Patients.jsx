import "./Patients.css";

import { Avatar, Card, List } from "antd";

import { Link } from "react-router-dom";
import React from "react";

export default function Patients({ patients, loading }) {
  return (
    <Card className="smallcard">
      <List
        itemLayout="horizontal"
        dataSource={patients}
        loading={loading}
        renderItem={patient => (
          <Link to={"/patients/" + patient._id}>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon="user" />}
                title={patient.firstName + " " + patient.lastName}
                description={patient.gender}
              />
            </List.Item>
          </Link>
        )}
      />
    </Card>
  );
}
