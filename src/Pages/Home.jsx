import React, { useState } from "react";
import Header from "../components/Header";
import Movies from "../components/Movies";
import { Rate, ConfigProvider, theme } from "antd";

import "./Home.css";

function Home(movie) {
  const [value, setValue] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const filterValue = value;

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsClicked(true); // Establecemos isClicked como true al hacer clic
    setTimeout(() => {
      setIsClicked(false); // Restablecer isClicked a false después de 0.5 segundos
    }, 500);
  };

  return (
    <>
      <Header />
      <div className="col-12 text-center filter-container border-bottom ">
        <p className="filterText">Rating</p>

        <span>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
            }}
          >
            <Rate tooltips={desc} onChange={setValue} value={value} />
          </ConfigProvider>
        </span>
      </div>
      <div>
        <Movies filterValue={filterValue} />
      </div>
      <div className="footer d-flex justify-content-end">
        <i
          className={`bi bi-caret-up-square-fill text-white me-4 mb-3 button-up ${
            isClicked ? "clicked" : "" // Aplicamos la clase "clicked" si isClicked es true
          }`}
          onClick={handleOnClick}
        ></i>
      </div>
    </>
  );
}

export default Home;
