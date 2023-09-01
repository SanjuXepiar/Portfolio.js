import "./App.css";
import React from "react";
import RouteComponent from "./Route";

import Navbar from "./component/Navbar/Navbar";
function App() {
  return (
    <main>
      <Navbar />
      <RouteComponent />
    </main>
  );
}

export default App;
