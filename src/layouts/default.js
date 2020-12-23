import React from "react";
import Sidebar from "../components/sidebar";

const DefaultLayout = ({children}) => {
  return (
      <div className="layout d-flex">
        <Sidebar />
        <div className="content-wrapper w-100">
        {children}
        </div>
      </div>
  );
};

export default DefaultLayout;
