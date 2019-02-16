import { Breadcrumb, Layout, Menu } from "antd";

import { Link } from "react-router-dom";
import React from "react";

const { Header, Content, Footer } = Layout;

export default function PageNavWrapper({ children, type, pname }) {
  return (
    <Layout className="layout page">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">Patients</Menu.Item>
          <Menu.Item key="2">Schedule</Menu.Item>
          <Menu.Item key="3" style={{ float: "right" }}>
            Settings
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          {type == "patient" ? (
            <React.Fragment>
              <Breadcrumb.Item>
                <Link to="/dashboard">Patients</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{pname}</Breadcrumb.Item>
            </React.Fragment>
          ) : (
            <Breadcrumb.Item>Patients</Breadcrumb.Item>
          )}
        </Breadcrumb>
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>&copy; 2018 ShiftChange</Footer>
    </Layout>
  );
}
