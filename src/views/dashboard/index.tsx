import React from "react";
import { Overview } from "./components/OverviewBar";

const Dashboard = () => {
  return <div style={{
    backgroundColor: 'pink',
    height: '100%',
    width: '100%'
  }}>
    <Overview/>
  </div>;
};

export default Dashboard;
