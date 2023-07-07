import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

function Search() {
  return (
    <div className="vh-100 d-flex flex-column align-items-center  bg-dark mt-5">
      <h1 className="detailsText">Búsqueda</h1>

      <p className="overview">Escribe el nombre de tu pelicula deseada:</p>
    </div>
  );
}

export default Search;
