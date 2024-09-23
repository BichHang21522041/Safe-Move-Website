import React from "react";
import { Sidebar } from "./SideBar";

// Define a simple layout type for flexibility
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Website Header</h1>
      </header>
      <Sidebar/>
      <main style={mainStyle}>{children}</main>
      <footer style={footerStyle}>
        <p>Website Footer © 2024</p>
      </footer>
    </div>
  );
};

// Correctly typed CSS styles using React.CSSProperties
const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#282c34",
  color: "white",
  padding: "20px",
  textAlign: "center",
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  padding: "20px",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#282c34",
  color: "white",
  textAlign: "center",
  padding: "10px",
};

export default Layout;