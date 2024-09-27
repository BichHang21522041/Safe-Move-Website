export const FloodTable = () => {
  const RenderRow = (
    location: string,
    cameras: number,
    floodCameras: number,
    users: number
  ) => (
    <div
      style={{
        color: "#AEAEAE",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <div style={{ width: "35%" }}>Location</div>
      <div style={{ width: "20%" }}>Cameras</div>
      <div style={{ width: "20%" }}>Flood Cameras</div>
      <div style={{ width: "20%" }}>Warning User</div>
    </div>
  );
  return (
    <div
      style={{
        backgroundColor: "#3A3A5A",
        width: "60%",
        color: "white",
        borderWidth: 1,
        borderRadius: 20,
        padding: "10px",
      }}
    >
      <h3>Distribution among Vietnam</h3>
      {/* <RenderRow /> */}
    </div>
  );
};
