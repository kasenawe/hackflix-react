import "./About.css";

function About() {
  return (
    <div className="container m-auto d-flex align-items-center pt-5">
      <div className="row d-flex mt-5">
        <div className="col-12 col-sm-12 col-md-4">
          <div className="" />
          <img
            src="img/Maximiliano.png"
            alt="Maximiliano"
            className="about-img"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-8">
          <h1 className="about-title">About me</h1>

          <p className="mt-4 about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam alias
            corporis voluptas ducimus dignissimos consectetur culpa, dolore sint
            enim modi doloremque aliquam similique rem nulla aperiam minima est
            fuga placeat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
