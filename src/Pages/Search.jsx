import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

function Search() {
  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=73927ca11726d859c91ed5f93b34f84d&page=1&vote_average.gte=${
            (filterValue - 1) * 2
          }`
        );

        setMovieDetails(response.data);
      } catch (error) {
        setMovieDetails(null);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetails();
  }, []);

  return (
    <div className="vh-100 d-flex flex-column align-items-center  bg-dark mt-5">
      <h1 className="detailsText">Búsqueda</h1>

      <p className="overview">Escribe el nombre de tu pelicula deseada:</p>
    </div>
  );
}

export default Search;
