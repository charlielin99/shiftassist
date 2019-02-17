import { Card, List } from "antd";

import { Link } from "react-router-dom";
import React from "react";

export default function Schedule({ shifts, loading }) {
  return (
    <Card className="patients">
      <List
        itemLayout="horizontal"
        dataSource={shifts}
        loading={loading}
        renderItem={(shift, i) => (
          <Link to={"/shifts/"}>
            <List.Item>
              <List.Item.Meta
                title={shift.startTime + " - " + shift.endTime}
                description={<Link to="/">Patients</Link>}
              />
            </List.Item>
          </Link>
        )}
      />
    </Card>
  );
}
