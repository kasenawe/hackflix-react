import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import Movie from "../components/Movie";

function Search() {
  const [moviesData, setMoviesData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovieResults(event) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=73927ca11726d859c91ed5f93b34f84d&query=${inputValue}`
        );
        setMoviesData(response.data.results);
      } catch (error) {
        setMoviesData(null);
      } finally {
        setIsLoading(false);
      }
    }
    console.log(inputValue);
    getMovieResults();
  }, [inputValue]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-start  bg-dark mt-5">
      <h1 className="detailsText pt-5">Find your favorites movies here:</h1>
      <form className="form" autoComplete="off">
        <div className="d-flex flex-column gap-4">
          <label htmlFor="username">Search</label>
          <input
            type="text"
            name="movie"
            id="movie"
            placeholder="Movie, actor, genre"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
      </form>
      {isLoading && (
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
      )}
      ;
      {moviesData.length > 0 ? (
        <>
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
      ) : (
        moviesData.length > 0 && (
          <div className="bg-dark text-center emptyMovies">
            <p className="pEmpty">No movies found</p>
          </div>
        )
      )}
      ;
    </div>
  );
}

export default Search;
