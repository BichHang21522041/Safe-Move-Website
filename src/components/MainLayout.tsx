import React, { CSSProperties } from "react";
import { Sidebar } from "./SideBar";
import BG from "../images/BG.png";
import { Header } from "./Header";

// Define a simple layout type for flexibility
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={containerStyle}>
      <Sidebar style={sideBarStyle} />
      <div style={contentStyle}>
        <Header style={headerStyle}/>
      <main style={mainStyle}>{children}</main>
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  minHeight: "100vh",
  gap: '50px',
  backgroundImage: `url(${BG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height:'100vh'
};

const sideBarStyle: CSSProperties = {
  backgroundColor: '#464667',
  width: '10vw',
  minWidth: 250,
  color: 'white'
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  background: 'white',
  display: 'flex',
  overflow: 'auto',
};

const headerStyle: React.CSSProperties = {
  backgroundColor: 'pink',
  height: '10%',
  display:'flex',
  justifyContent: 'flex-end', 
  alignItems: 'center',
  gap: '50px',
};

const contentStyle: React.CSSProperties = {
  backgroundColor: 'yellow',
  width: '100%',
  height: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  paddingRight: '50px'
}

export default Layout;
