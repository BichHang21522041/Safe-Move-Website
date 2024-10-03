interface IRowProps {
  location: string;
  cameras: string | number;
  floodCameras: string | number;
  users: string | number;
}

const rows: IRowProps[] = [
  {
    location: "Ho Chi Minh",
    cameras: 33,
    floodCameras: 70,
    users: 500,
  },
  {
    location: "Ha Noi",
    cameras: 38,
    floodCameras: 75,
    users: 700,
  },
  {
    location: "Da Nang",
    cameras: 37,
    floodCameras: 76,
    users: 800,
  },
  {
    location: "Hai Phong",
    cameras: 36,
    floodCameras: 72,
    users: 500,
  },
  {
    location: "Can Tho",
    cameras: 33,
    floodCameras: 80,
    users: 600,
  },
  // {
  //   location: "Da Nang",
  //   cameras: 37,
  //   floodCameras: 76,
  //   users: 800,
  // },
  // {
  //   location: "Hai Phong",
  //   cameras: 36,
  //   floodCameras: 72,
  //   users: 500,
  // },
  // {
  //   location: "Can Tho",
  //   cameras: 33,
  //   floodCameras: 80,
  //   users: 600,
  // },
  // {
  //   location: "Ho Chi Minh",
  //   cameras: 33,
  //   floodCameras: 70,
  //   users: 500,
  // },
  // {
  //   location: "Ha Noi",
  //   cameras: 38,
  //   floodCameras: 75,
  //   users: 700,
  // },
  // {
  //   location: "Da Nang",
  //   cameras: 37,
  //   floodCameras: 76,
  //   users: 800,
  // },
];

export const FloodTable = () => {
  const RenderRow = ({ location, cameras, floodCameras, users }: IRowProps) => (
    <div
      style={{
        color: location === "Location" ? "#AEAEAE" : "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <div style={{ width: "35%" }}>{location}</div>
      <div style={{ width: "20%" }}>{cameras}</div>
      <div style={{ width: "20%" }}>{floodCameras}</div>
      <div style={{ width: "20%" }}>{users}</div>
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
        // display: "flex",
        // flex: 1,
        // flexDirection: "column",
      }}
    >
      <h3>Distribution among Vietnam</h3>
      <div style={{ gap: "20px", display: "flex", flexDirection: "column" }}>
        <RenderRow
          location="Location"
          cameras="Cameras"
          floodCameras="Flood Cameras"
          users="Warning Users"
        />
        <div
          style={{
            overflow: "auto",
            // gap: "20px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            // backgroundColor: "pink",
            // height: "100%",
            overflowY: "scroll",
          }}
        >
          {rows.map((item: IRowProps) => (
            <div
              style={{
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <RenderRow
                location={item.location}
                cameras={item.cameras}
                floodCameras={item.floodCameras}
                users={item.users}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
