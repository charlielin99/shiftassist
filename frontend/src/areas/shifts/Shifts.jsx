import { Card, List } from "antd";

import { Link } from "react-router-dom";
import React from "react";

export default function Schedule({ nurse, loading }) {
  return (
    <Card className="patients">
      <List
        itemLayout="horizontal"
        dataSource={nurse && nurse.shifts}
        loading={loading}
        renderItem={(shift, i) => (
          <Link to={"/shifts/" + i}>
            <List.Item>
              <List.Item.Meta
                title={shift.startTime}
                description={shift.endTime}
              />
            </List.Item>
          </Link>
        )}
      />
    </Card>
  );
}
