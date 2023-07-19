import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { Rate } from "antd";
import "./MovieModal.css";
import Modal from "react-bootstrap/Modal";
import { BsStarFill } from "react-icons/bs";

function MovieModal({ show, setShow, movie }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=73927ca11726d859c91ed5f93b34f84d&language=en-US}`
        );
        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=73927ca11726d859c91ed5f93b34f84d`
        );

        const movieDetails = movieResponse.data;
        const credits = creditsResponse.data;

        // Obtengo el nombre del director
        const director = credits.crew.find(
          (member) => member.job === "Director"
        );

        // Obtengo los actores principales (primeros 5)
        const actors = credits.cast.slice(0, 5).map((actor) => ({
          name: actor.name,
          profilePath: actor.profile_path,
        }));

        setMovieDetails({
          ...movieDetails,
          director,
          actors,
        });
      } catch (error) {
        setMovieDetails(null);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetails();
  }, []);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
      centered
      className="modal-format"
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        className="modalHeader bg-dark text-white"
      >
        <Modal.Title id="example-modal-sizes-title-lg" className="text-center">
          {movie.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body bg-dark rounded-bottom">
        <div className="row">
          <div className="col-12 col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="modal-img"
            />
          </div>
          {movieDetails && (
            <div className="col-12 col-md-8 d-flex flex-column">
              <div className="h-100 d-flex flex-column justify-content-start">
                {movieDetails.release_date && (
                  <p className="modal-year">
                    ({movieDetails.release_date.slice(0, 4)})
                  </p>
                )}

                <ul className="list-inline">
                  {movieDetails.genres.map((genre, index) => (
                    <React.Fragment key={genre.id}>
                      <li>
                        {genre.name}
                        {index !== movieDetails.genres.length - 1 ? "/" : ""}
                      </li>
                    </React.Fragment>
                  ))}

                  <li>
                    <i className="bi bi-circle-fill"></i>
                  </li>
                  <li>{movieDetails.runtime} mins</li>
                  <li>
                    <i className="bi bi-circle-fill"></i>
                  </li>
                  <li>
                    <BsStarFill className="star-icon" />
                    <span className="rating-text">
                      {movieDetails.vote_average}
                    </span>
                  </li>
                </ul>

                <p className="mt-4">
                  {movieDetails.overview.slice(0, 150) + "..."}
                </p>
              </div>

              <div className="d-flex justify-content-end">
                <NavLink to={`/movie/${movieDetails.id}`} className="btn-modal">
                  More Info
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MovieModal;
