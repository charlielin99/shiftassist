import { Breadcrumb, Layout } from "antd";
import { Link, withRouter } from "react-router-dom";

import Heading from "../../areas/heading/Heading";
import React from "react";

const { Content, Footer } = Layout;

export default withRouter(({ match, ...props }) => {
  return (
    <Layout className="layout page">
      <Heading {...props} />
      <Content style={{ padding: "0 50px", overflowY: "scroll" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          {match.params && match.params.patientId ? (
            <React.Fragment>
              <Breadcrumb.Item>
                <Link to="/patients">Patients</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{match.params.patientId}</Breadcrumb.Item>
            </React.Fragment>
          ) : (
            <Breadcrumb.Item>Patients</Breadcrumb.Item>
          )}
        </Breadcrumb>
        {props.children}
      </Content>
      <Footer style={{ textAlign: "center", zIndex: 99 }}>
        &copy; 2018 ShiftChange
      </Footer>
    </Layout>
  );
});
