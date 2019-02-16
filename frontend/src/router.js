import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ChatPage from "./pages/chat/ChatPage";
import NotFoundPage from "./pages/404/404";
import Patient from "./pages/patient/Patient";
import Patients from "./pages/patients/Patients";
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
    component: Patients,
    exact: true,
    visible: true
  },
  {
    name: "Schedule",
    url: "/schedule",
    component: Patients,
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
    name: "Patient",
    url: "/patients/:patientId",
    component: Patient
  },
  {
    name: "Settings",
    url: "/settings",
    // component: () => null,
    component: undefined,
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
