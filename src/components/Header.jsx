import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import "./Header.css";

function Header() {
  const [headerMovies, setHeaderMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <div>
      <Carousel className="col-12 headerContainer">
        {headerMovies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div
              className="d-block headerContainer"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9) 10%, transparent, transparent, rgba(0, 0, 0, 0.9) calc(100% - 10%)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,

                backgroundRepeat: "no-repeat",
                backgroundAttachment: "static",
                backgroundSize: "cover",
              }}
            ></div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Header;
