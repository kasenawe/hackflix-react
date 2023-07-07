import "./Filter.css";

import React, { useState } from "react";
import Header from "./Header";
import Movies from "./Movies";
import { Rate, ConfigProvider, theme } from "antd";

function Filter(movie) {
  const [value, setValue] = useState(0);
  const filterValue = value;

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  return (
    <>
      <Header />
      <div className="col-12 text-center filterContainer border-bottom">
        <p className="filterText">Filtrar por rating</p>
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
    </>
  );
}

export default Filter;
