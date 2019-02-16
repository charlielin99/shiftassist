import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import Patient from "./pages/patient/Patient";
import Patients from "./pages/patients/Patients";
import React from "react";
import SplashPage from "./pages/splash/Splash";

const routes = [
  {
    name: "Home",
    url: "/",
    component: SplashPage,
    exact: true
  },
  {
    name: "Dashboard: Patients",
    url: "/dashboard",
    component: Patients
  },
  {
    name: "Patient",
    url: "/patients/:patientId",
    component: Patient
  }
];

{
  /* <ul>
<li>
  <Link to="/">Home</Link>
</li>
<li>
  <Link to="/about">About</Link>
</li>
<li>
  <Link to="/topics">Topics</Link>
</li>
</ul>

<hr /> */
}

const AppRouter = () => (
  <Router>
    <div>
      {routes.map(r => {
        return (
          <Route
            key={r.url}
            exact={r.exact}
            path={r.url}
            component={r.component}
          />
        );
      })}
    </div>
  </Router>
);

export default AppRouter;
