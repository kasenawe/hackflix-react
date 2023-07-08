import { NavLink } from "react-router-dom";

import { Rate } from "antd";
import "./MovieModal.css";
import Modal from "react-bootstrap/Modal";

function MovieModal({ show, setShow, movie }) {
  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
      centered
      className="modalFormat"
    >
      <Modal.Header closeButton className="modalHeader">
        <Modal.Title id="example-modal-sizes-title-lg">
          {movie.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody bg-dark rounded-bottom">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="modalImg"
        ></img>
        <div className="d-flex flex-column justify-content-between">
          <p>Overview:</p>
          <p>{movie.overview}</p>

          <NavLink to={`/movie/${movie.id}`}>More Info</NavLink>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MovieModal;
