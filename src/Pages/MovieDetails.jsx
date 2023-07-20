import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { BsStarFill } from "react-icons/bs";

import "./MovieDetails.css";

function MovieDetails() {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=73927ca11726d859c91ed5f93b34f84d&language=en-US}`
        );
        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=73927ca11726d859c91ed5f93b34f84d`
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
      {movieDetails ? (
        <div className="container m-auto d-flex align-items-center pt-5">
          <div className="row d-flex mt-5">
            <div className="col-12 col-sm-12 col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                alt={`Imagen de ${movieDetails.title}`}
                className="details-img h-auto w-100"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-8">
              <h1 className="details-title">{movieDetails.title}</h1>
              <p className="release-year">
                ({movieDetails.release_date.slice(0, 4)})
              </p>
              <ul className="list-inline">
                <li> {movieDetails.release_date} </li>
                <li>
                  <i className="bi bi-circle-fill"></i>
                </li>
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
              <hr />
              <p className="overview">{movieDetails.tagline}</p>
              <hr />
              <p className="overview-title">Overview: </p>
              <p className="overview">{movieDetails.overview}</p>
              <hr />
              <div className="container-fluid m-auto">
                {" "}
                <div className="credits d-flex flex-row flex-wrap gap-4">
                  <div className="order-last col-sm-12 order-sm-last col-md-3 credit">
                    <h3 className="text-white">Directed by:</h3>
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${movieDetails.director?.profile_path}`}
                        alt={`Foto de ${movieDetails.director?.name}`}
                      />
                      <p>{movieDetails.director?.name}</p>
                    </div>
                  </div>
                  <div className="col-sm-12 order-md-last col-md-8 m-auto">
                    <h3 className="text-white">Starring:</h3>
                    <div className="list-actors flex-wrap">
                      {movieDetails.actors?.map((actor) => (
                        <div
                          key={actor.name}
                          className="d-inline-block actor m-auto text-center"
                        >
                          <img
                            src={`https://image.tmdb.org/t/p/w200/${actor.profilePath}`}
                            alt={`Foto de ${actor.name}`}
                          />

                          <p>{actor.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center bg-dark">
          <h3 className="headerText">No existe esta pelicula :(</h3>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
