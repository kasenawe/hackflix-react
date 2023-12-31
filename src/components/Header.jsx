import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import "./Header.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [headerMovies, setHeaderMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    async function getHeaderMovies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "73927ca11726d859c91ed5f93b34f84d",
              language: "en-US",
              sort_by: "popularity.desc",
              page: 1,
              with_original_language: "en",
              include_adult: false,
              include_video: false,
            },
          }
        );

        const randomMovies = getRandomMovies(response.data.results, 5);
        setHeaderMovies(randomMovies);
      } catch (error) {
        console.error(error);
        setHeaderMovies([]);
      } finally {
        setIsLoading(false);
      }
    }

    getHeaderMovies();
  }, []);

  const notifyError = () => {
    toast.error("Out of the project's scope", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handleClick = () => {
    if (!isClicked) {
      // Evitar que se active el temporizador si ya se ha hecho clic previamente
      setIsClicked(true); // Establece isClicked como true al hacer clic
      notifyError();

      setTimeout(() => {
        setIsClicked(false);
      }, 200);
    }
  };
  function getRandomMovies(movies, count) {
    const shuffled = movies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  if (isLoading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center bg-dark">
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
      <div>
        <Carousel className="col-12 headerContainer">
          {headerMovies.map((movie) => (
            <Carousel.Item key={movie.id}>
              <div
                className="d-block headerContainer"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9) 10%, transparent, transparent, rgba(0, 0, 0, 0.9) calc(100% - 15%)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,

                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "static",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <Carousel.Caption>
                <h3>{movie.title}</h3>
                <div className="buttonContainer">
                  <button
                    className={`headerButton ${isClicked ? "clicked" : ""}`}
                    onClick={handleClick}
                  >
                    <i className="bi bi-play-fill"></i>Play
                  </button>
                  <NavLink
                    to={`/movie/${movie.id}`}
                    className="headerButton btn-text"
                  >
                    <i className="bi bi-info-circle"></i> More Info
                  </NavLink>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <ToastContainer />
    </>
  );
}

export default Header;
