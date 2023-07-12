import "./Home.css";

import React, { useState } from "react";
import Header from "../components/Header";
import Movies from "../components/Movies";
import { Rate, ConfigProvider, theme } from "antd";

function Home(movie) {
  const [value, setValue] = useState(0);
  const filterValue = value;

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          className="bi bi-caret-up-square-fill text-white me-4 mb-3 button-up"
          onClick={handleOnClick}
        ></i>
      </div>
    </>
  );
}

export default Home;
