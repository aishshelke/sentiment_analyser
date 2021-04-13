import React from "react"; //rafce
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Ragister from "./Components/Login/Ragister";
import Dashboard from "./Components/Dashboard/Dashboard";
import routing from "./router"

const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
      {/* <Ragister/> */}
      {/* <Dashboard /> */}
      {/* <routing/> */}
    </div>
  );
};

export default App;
