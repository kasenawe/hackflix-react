import { useState } from "react";
import HaRoutes from "./components/Routes";

import Navbar from "./components/Navbar";

import Filter from "./components/Filter";
import Header from "./components/Header";

import "./App.css";

function App(movie) {
  return (
    <>
      <Navbar />
      <HaRoutes />
    </>
  );
}

export default App;
