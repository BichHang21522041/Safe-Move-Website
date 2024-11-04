import { CustomButton } from "../../components/CustomButton";
import { SearchBar } from "../../components/SearchBar";
import { SelectBar } from "../../components/SelectBar";
import CustomTable from "../../components/Table";
import { EStatus } from "../../utils/enum";
import { Size } from "../../utils/size";

const Dashboard = () => {
  const data = [
    { value: EStatus.ACTIVE, label: "Active" },
    { value: EStatus.INACTIVE, label: "Inactive" },
  ];
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        gap: "2vh",
        flexDirection: "column",
        display: "flex",
        height: "100%",
      }}
    >
      <div style={{ fontSize: Size.L }}>Camera List</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div style={{ flexDirection: "row", gap: 10, display: "flex" }}>
          <SearchBar />
          <SelectBar options={data} defaultValue={EStatus.ACTIVE} />
        </div>
        <CustomButton title="Inactivate" />
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <CustomTable />
      </div>
    </div>
  );
};

export default Dashboard;
