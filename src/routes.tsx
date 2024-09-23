import React, { ReactNode } from "react";
import {
  BrowserRouter as Router,
  Routes as Routing,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from "./views/dashboard";
import Map from "./views/map";
import SignIn from "./views/signIn";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMapOutline } from "react-icons/io5";

export interface IRoute {
  name: string;
  icon: ReactNode;
  path: string;
  component?: ReactNode;
  children?: { path: string; component: ReactNode }[];
}

const routes: IRoute[] = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    name: "Map",
    icon: <IoMapOutline />,
    path: "/map",
    component: <Map />,
  },
];

function renderRoutes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign in</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
          </ul>
        </nav>

        <Routing>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<Map />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routing>
      </div>
    </Router>
    // routes.map((route, index) => (
    //   <Route path={route.path} element={route.component} key={index}>
    //     {route.children &&
    //       route.children.map((item, idx) => (
    //         <Route
    //           path={item.path}
    //           element={item.component}
    //           key={`${index}-${idx}`}
    //         />
    //       ))}
    //   </Route>
    // ))
  );
}

export default renderRoutes;
