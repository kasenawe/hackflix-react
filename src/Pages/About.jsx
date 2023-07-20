import "./About.css";

function About() {
  return (
    <div className="container m-auto d-flex flex-column align-items-center pt-5">
      <div className="row d-flex mt-5">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <img
            src="img/Maximiliano.png"
            alt="Maximiliano"
            className="about-img-me"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-8">
          <h1 className="about-title">About me</h1>

          <p className="mt-4 about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam alias
            corporis voluptas ducimus dignissimos consectetur culpa, dolore sint
            enim modi doloremque aliquam similique rem nulla aperiam minima est
            fuga placeat.
          </p>
        </div>
      </div>
      <div className="row d-flex mt-5 w-auto">
        <div className="col-12 col-sm-12 col-md-6 col-lg-8">
          <h1 className="about-title">About the project</h1>

          <p className="mt-4 about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam alias
            corporis voluptas ducimus dignissimos consectetur culpa, dolore sint
            enim modi doloremque aliquam similique rem nulla aperiam minima est
            fuga placeat.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center ">
          <div className="d-flex justify-content-between">
            <div className="d-inline-block justify-content-center">
              <img
                src="img/halogo.jpeg"
                alt="hackacademy"
                className="about-img-ha"
              />
              <h4 className="about-card-text">Hack Academy</h4>
            </div>

            <div className="d-inline-block justify-content-center">
              <img
                src="img/the_movie_database.svg"
                alt="tmdb"
                className="about-img-tmdb"
              />
              <h4 className="about-card-text">The Movie Database</h4>
            </div>
          </div>

          <div className="about-technologies-container">
            <h4 className="about-card-text">Technologies</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
