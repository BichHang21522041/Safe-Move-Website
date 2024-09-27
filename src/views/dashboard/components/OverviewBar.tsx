import { CardItem } from "./CardItem"

export const Overview = () => {
  return (
    <div
      style={{
        backgroundColor: "#3A3A5A",
        borderWidth: 1,
        borderRadius: "20px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <h3>Overview</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CardItem label={"Total flood area"} quantity={5} color="#9797EF" />
        <CardItem label={"Total flood area"} quantity={5} color="#3391D0" />
        <CardItem label={"Total flood area"} quantity={5} color="#FA9BE5" />
        <CardItem label={"Total flood area"} quantity={5} color="#DDBDD6" />
      </div>
    </div>
  );
}