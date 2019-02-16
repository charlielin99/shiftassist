import "./Patients.css";

import { Avatar, Breadcrumb, Card, Layout, List, Menu } from "antd";

import { Link } from "react-router-dom";
import React from "react";
import users from "../../data/users";

const { Header, Content, Footer } = Layout;

export default function Patients() {
  return (
    <Layout className="layout page">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">Page 1</Menu.Item>
          <Menu.Item key="2">Page 2</Menu.Item>
          <Menu.Item key="3">Page 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Patients</Breadcrumb.Item>
        </Breadcrumb>
        <Card className="patients">
          <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={user => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={user.avatar} />}
                  title={
                    <a href="https://ant.design">
                      {user.first_name + " " + user.last_name}
                    </a>
                  }
                  description={user.email}
                />
              </List.Item>
            )}
          />
        </Card>
      </Content>
      <Footer style={{ textAlign: "center" }}>&copy; 2018 ShiftChange</Footer>
    </Layout>
  );
}
