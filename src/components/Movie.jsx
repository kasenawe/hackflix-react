import React, { useState } from "react";
import MovieModal from "./MovieModal";
import { Rate, ConfigProvider, theme } from "antd";
import "./Movie.css";

function Movie({ movie, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);

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
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
          disabled
          defaultValue={2}
          value={Math.round(movie.vote_average / 2)}
        />
      </span>
      <span className="movieText"></span>
      <MovieModal show={show} setShow={setShow} movie={movie} />
    </div>
  );
}

export default Movie;
