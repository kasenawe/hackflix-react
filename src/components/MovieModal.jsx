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
      <Modal.Header
        closeButton
        closeVariant="white"
        className="modalHeader bg-dark text-white"
      >
        <Modal.Title id="example-modal-sizes-title-lg" className="text-center">
          {movie.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody bg-dark rounded-bottom">
        <div className="row">
          <div className="col-12 col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="modal-img"
            />
          </div>

          <div className="col-12 col-md-8 d-flex flex-column justify-content-between">
            <div className="mt-5">
              {movie.release_date && <p>{movie.release_date.slice(0, 4)}</p>}

              <p>{movie.overview.slice(0, 200) + "..."}</p>
            </div>

            <div className="d-flex justify-content-end">
              <NavLink to={`/movie/${movie.id}`} className="btn-modal">
                More Info
              </NavLink>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MovieModal;
