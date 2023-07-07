import { useState } from "react";
import Router from "./components/Router";

import Navbar from "./components/Navbar";

import Filter from "./Pages/Home";
import Header from "./components/Header";

import "./App.css";

function App(movie) {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
