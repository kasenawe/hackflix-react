import "./About.css";

function About() {
  return (
    <div className="container m-auto d-flex flex-column align-items-center pt-5 py-5">
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
            Hello! My name is Maximiliano Quintana, and I'm from Uruguay.
          </p>
          <p className="mt-1 about-text">
            With a solid 12-year background as a System Administrator in IT
            Support and Infrastructure areas, I made a career change in 2023 and
            graduated as a Full Stack Developer.
          </p>
          <p className="mt-1 about-text">
            Currently, I'm eagerly seeking my first experience in the
            development field, where I can apply my acquired experience and
            unleash my potential. I am passionate about working on challenging
            projects, and I am excited to contribute my skills in this
            ever-evolving domain.
          </p>
          <p className="mt-1 about-text">Thank you for visiting my site. </p>
        </div>
      </div>

      <div className="row d-flex mt-5 w-auto">
        <hr className="hr-format" />
        <div className="col-12 col-sm-12 col-md-6 col-lg-8">
          <h1 className="about-title">About the project</h1>

          <p className="mt-4 about-text">
            This proyect was made during Hack Academy's Coding Bootcamp, a
            full-time course with +600 hours of dedication over 3 months while
            going through the React.js part of the Bootcamp.
          </p>
          <p className="mt-1 about-text">
            Its purpose is to be a web application for streaming movies that
            provides detailed information about them. It was designed as a
            single page application, using React to layout the site and querying
            with AJAX calls to The Movie Database (TMDB)'s API.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center mt-5">
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

          <div className="about-technologies-container mt-5">
            <h4 className="about-card-text">Technologies</h4>
            <div className="d-flex justify-content-center gap-4 mt-3">
              <div>
                <img
                  src="img/html5-logo-svgrepo-com.svg"
                  alt="html5"
                  className="techs-icons"
                  style={{ height: "50px", width: "auto", color: "white" }}
                />
                <h5 className="techs-texts">HTML5</h5>
              </div>
              <div>
                <img
                  src="img/css-4.svg"
                  alt="html5"
                  className="techs-icons"
                  style={{ height: "50px", width: "auto", color: "white" }}
                />
                <h5 className="techs-texts">CSS</h5>
              </div>
              <div>
                <img
                  src="img/logo-javascript-svgrepo-com.svg"
                  alt="html5"
                  className="techs-icons"
                  style={{ height: "50px", width: "auto", color: "white" }}
                />
                <h5 className="techs-texts">JavaScript</h5>
              </div>
              <div>
                <img
                  src="img/logo-react-svgrepo-com.svg"
                  alt="html5"
                  className="techs-icons"
                  style={{ height: "50px", width: "auto", color: "white" }}
                />
                <h5 className="techs-texts">React</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
