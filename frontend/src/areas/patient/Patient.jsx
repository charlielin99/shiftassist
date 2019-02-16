import { Card, Divider, Spin, Timeline } from "antd";

import React from "react";
import { getFullName } from "../../utils/utils";

export default function Patient({ user, shiftChanges }) {
  const name = getFullName(user);
  return (
    <Card className="patients">
      <h1>{name}</h1>
      <p>{user.gender}</p>
      <Divider orientation="left">Contact Info</Divider>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.address}</p>
      <Divider orientation="left">Shift-Change History</Divider>
      <Spin spinning={!shiftChanges}>
        <Timeline>
          {shiftChanges &&
            shiftChanges.map((i, a) => {
              return (
                <Timeline.Item key={a}>
                  {i.date}: {i.time}
                  {/* <Card>
                </Card> */}
                  {/* {i} */}
                </Timeline.Item>
              );
            })}
        </Timeline>
      </Spin>
    </Card>
  );
}
