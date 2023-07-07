import React, { useState, useEffect } from "react";
import axios from "axios";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import { RotatingLines } from "react-loader-spinner";

import rate from "../Pages/Home";
import Movie from "./Movie";

import "./Movies.css";

function Movies({ filterValue }) {
  const [moviePage, setPage] = useState(1);

  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPage(1);
    async function getMoviesData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=73927ca11726d859c91ed5f93b34f84d&page=1&vote_average.gte=${
            (filterValue - 1) * 2
          }`
        );

        setMoviesData(response.data.results);
      } catch (error) {
        setMoviesData(null);
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesData();
  }, [filterValue]);

  useEffect(() => {
    async function getMoviesData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=73927ca11726d859c91ed5f93b34f84d&page=${moviePage}&vote_average.gte=${
          (filterValue - 1) * 2
        }`
      );

      setMoviesData((prevMoviesData) => [
        ...prevMoviesData,
        ...response.data.results,
      ]);
    }
    moviePage > 1 && getMoviesData();
  }, [moviePage]);

  if (isLoading) {
    return (
      <div className="vh-100 d-flex flex-column align-items-center  bg-dark">
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

  if (moviesData.length > 0) {
    return (
      <>
        <BottomScrollListener
          onBottom={() => {
            setPage(moviePage + 1);
          }}
          offset={500}
        />
        <div className="container">
          <div className="row">
            {moviesData.map((movie) => (
              <Movie
                key={Math.floor(String(Math.random() * 10000000000000000))}
                movie={movie}
              />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      filterValue > 0 && (
        <div className="bg-dark text-center emptyMovies">
          <p className="pEmpty">No hay peliculas con este rating</p>
        </div>
      )
    );
  }
}

export default Movies;
