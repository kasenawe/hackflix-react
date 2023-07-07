import React, { useState } from "react";
import { Rate } from "antd";
import MovieModal from "./MovieModal";
import "./Movie.css";

function Movie({ movie, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);
  //console.log(show);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="col-6 col-md-4 col-lg-3 bg-dark text-center">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
        className={`movieImg mt-4 ${isHovered ? "movieHovered" : ""}`}
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
        onClick={() => setShow(true)}
      />
      <span>
        <Rate
          disabled
          defaultValue={2}
          value={Math.round(movie.vote_average / 2)}
          className="mt-2"
        />
      </span>
      <span className="movieText">{movie.vote_average}</span>
      <MovieModal show={show} setShow={setShow} movie={movie} />
    </div>
  );
}

export default Movie;
