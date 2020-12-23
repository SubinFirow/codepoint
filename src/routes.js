/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Redirect } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Formview from "./screens/From";
// Layout Types
import Homeview from "./screens/Home";

// Route Views


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    layout: DefaultLayout,
    component: Homeview,
  },
  {
    path: "/form",
    layout: DefaultLayout,
    component: Formview,
  },
  
];
