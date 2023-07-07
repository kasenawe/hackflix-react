import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

import "./MovieDetails.css";

function MovieDetails() {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=73927ca11726d859c91ed5f93b34f84d&language=en-US}`
        );

        setMovieDetails(response.data);
        console.log(response);
      } catch (error) {
        setMovieDetails(null);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetails();
  }, []);

  if (isLoading) {
    return (
      <div className="vh-100 d-flex flex-column align-items-center justify-content-center bg-dark">
        <h3 className="headerText">Loading</h3>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
  return (
    <>
      {movieDetails ? (
        <div className="vh-100 d-flex flex-column align-items-center  bg-dark mt-5">
          <h1 className="detailsText">{movieDetails.title}</h1>
          <div className="d-flex flex-row align-items-center mx-5">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={`Imagen de ${movieDetails.title}`}
              className="me-5"
            />
            <p className="overview">{movieDetails.overview}</p>
            <p className="overview">{movieDetails.release_date}</p>
          </div>
        </div>
      ) : (
        <div className="vh-100 d-flex flex-column align-items-center justify-content-center bg-dark">
          <h3 className="headerText">No existe esta pelicula :(</h3>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
