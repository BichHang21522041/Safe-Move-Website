import React from "react";
import { Overview } from "./components/OverviewBar";
import { FloodTable } from "./components/FloodTable";

const Dashboard = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "10px",
      }}
    >
      <Overview />
      <div
        style={{ marginTop: "20px", flex: 1, display: "flex", height: "45%" }}
      >
        <FloodTable />
      </div>
    </div>
  );
};

export default Dashboard;
