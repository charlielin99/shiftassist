// import "./Patient.css";

import { Avatar, Breadcrumb, Card, Layout, List, Menu } from "antd";

import { Link } from "react-router-dom";
import PageNavWrapper from "../PageNavWrapper/PageNavWrapper";
import React from "react";
import { getFullName } from "../../utils/utils";
import users from "../../data/users";

export default function Patient(props) {
  const user = users[props.match.params.patientId - 1];
  console.log(user);
  const name = getFullName(user);
  return (
    <PageNavWrapper type="patient" pname={name}>
      <Card className="patients">Hello {name}</Card>
    </PageNavWrapper>
  );
}
