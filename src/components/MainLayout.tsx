import React, { CSSProperties } from "react";
import { Sidebar } from "./SideBar";
import BG from "../images/BG.png";

// Define a simple layout type for flexibility
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={containerStyle}>
      <Sidebar style={sideBarStyle} />
      <main style={mainStyle}>{children}</main>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  minHeight: "100vh",
  gap: 10,
  backgroundImage: `url(${BG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const sideBarStyle: CSSProperties = {
  backgroundColor: "pink",
  width: '10vw',
  minWidth: 250,
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  padding: "20px",
};

export default Layout;
