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
      {/* <header style={headerStyle}>
        <h1>Website Header</h1>
      </header> */}
      <Sidebar style={sideBarStyle} />
      <main style={mainStyle}>{children}</main>
      {/* <footer style={footerStyle}>
        <p>Website Footer © 2024</p>
      </footer> */}
    </div>
  );
};

// Correctly typed CSS styles using React.CSSProperties
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
  // backgroundColor: "red",
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  padding: "20px",
  // backgroundColor: "pink",
};

export default Layout;
