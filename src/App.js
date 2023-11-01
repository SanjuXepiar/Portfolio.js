import "./App.css";
import React from "react";
import RouteComponent from "./Route";
import Footer from "./component/Footer/Footer";

import Navbar from "./component/Navbar/Navbar";
function App() {
  return (
    <main>
      <Navbar />
      <RouteComponent />
      <Footer />
    </main>
  );
}

export default App;
