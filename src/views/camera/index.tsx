import { useMemo, useState } from "react";
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
  const [filter, setFilter] = useState<EStatus>(EStatus.ACTIVE);
  const buttonTitle = useMemo(
    () => (filter === EStatus.ACTIVE ? "Inactivate" : "Activate"),
    [filter]
  );
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
          <SelectBar
            options={data}
            defaultValue={EStatus.ACTIVE}
            setSelectedValue={setFilter}
          />
        </div>
        <CustomButton title={buttonTitle} />
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <CustomTable status={filter} />
      </div>
    </div>
  );
};

export default Dashboard;
