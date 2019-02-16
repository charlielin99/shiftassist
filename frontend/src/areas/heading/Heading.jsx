import { Layout, Menu } from "antd";

import React from "react";
import { routes } from "../../router";

const { Header } = Layout;

export default function Heading({ history }) {
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
        onClick={({ item, key, path }) => {
          history.push(key);
        }}
      >
        {routes
          .filter(i => i.visible)
          .map((i, a) => {
            return (
              <Menu.Item key={i.url} {...i.props}>
                {i.name}
              </Menu.Item>
            );
          })}
      </Menu>
    </Header>
  );
}
