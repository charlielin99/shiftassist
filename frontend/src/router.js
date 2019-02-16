import {
  ChatPage,
  LoginPage,
  PatientPage,
  PatientsPage,
  SettingsPage,
  ShiftsPage
} from "./pages/Pages";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import NotFoundPage from "./pages/404/404";
import React from "react";
import SplashPage from "./pages/splash/Splash";

export const routes = [
  {
    name: "Home",
    url: "/",
    component: SplashPage,
    exact: true,
    visible: true
  },
  {
    name: "Patients",
    url: "/patients",
    component: PatientsPage,
    exact: true,
    visible: true
  },
  {
    name: "Patient",
    url: "/patients/:patientId",
    component: PatientPage
  },
  {
    name: "Shifts",
    url: "/shifts",
    component: ShiftsPage,
    exact: true,
    visible: true
  },
  {
    name: "Chat",
    url: "/chat",
    component: ChatPage,
    exact: true,
    visible: true
  },
  {
    name: "Settings",
    url: "/settings",
    component: SettingsPage,
    visible: true,
    props: { style: { float: "right" } }
  },
  {
    name: "Login",
    url: "/login",
    component: LoginPage,
    visible: true,
    props: { style: { float: "right" } }
  }
  //   {
  //     name: "404",
  //     url: undefined,
  //     component: NotFoundPage
  //     // exact: true
  //   }
];

const AppRouter = () => (
  <Router>
    <Switch>
      {routes.map(r => {
        return (
          <Route
            key={r.name}
            exact={r.exact}
            path={r.url}
            component={r.component}
          />
        );
      })}
    </Switch>
  </Router>
);

export default AppRouter;
