import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Map from "./views/map";
import SignIn from "./views/signIn";
import Layout from "./components/MainLayout";
import RenderRoutes from "./routes";

function App() {
  return (
    <Layout children={<RenderRoutes/>}/>
  );
}

export default App;
