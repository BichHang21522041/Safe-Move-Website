import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { IoMapOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export const Sidebar = (props: {
  open?: boolean;
  onClose?: React.MouseEventHandler<HTMLSpanElement>;
  style?: React.CSSProperties;
}) => {
  const { open, onClose, style } = props;
  return (
    <div style={style}>
      <div
        style={{
          height: "20%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img src={require("../images/logo.png")} alt="" />
      </div>
      <div
        style={{
          height: "60%",
          alignItems: "flex-start",
          display: "flex",
          gap: 40,
          flexDirection: "column",
        }}
      >
        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
          <div
            style={{
              flexDirection: "row",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginLeft: "50px",
            }}
          >
            <MdOutlineDashboard size={20} />
            <div>Dashboard</div>
          </div>
        </Link>
        <Link to="/map" style={{textDecoration: 'none', color: 'inherit'}}>
          <div
            style={{
              flexDirection: "row",
              fontSize: "15",
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginLeft: 50,
            }}
          >
            <IoMapOutline size={20} />
            <div>Map</div>
          </div>
        </Link>
        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
          <div
            style={{
              flexDirection: "row",
              fontSize: "15",
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginLeft: 50,
            }}
          >
            <CiSettings size={20} />
            <div>Setting</div>
          </div>
        </Link>
      </div>
      <div style={{ height: "20%", flex: 1, display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            flexDirection: "row",
            fontSize: "15",
            display: "flex",
            gap: 20,
            marginLeft: 50,
          }}
        >
          <IoIosLogOut size={20} />
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
};
