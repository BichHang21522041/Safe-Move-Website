import { Overview } from "./components/OverviewBar";
import { FloodTable } from "./components/FloodTable";
import CustomCalendar from "./components/Calendar";
import { Chart } from "./components/Chart";

const Dashboard = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "10px",
        overflow: "auto",
      }}
    >
      <Overview />
      <div
        style={{
          marginTop: "20px",
          flex: 1,
          display: "flex",
          height: "45%",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FloodTable />
        <CustomCalendar />
      </div>
      <div
        style={{
          marginTop: "100px",
          flex: 1,
          display: "flex",
          height: "45%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1" }}>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
