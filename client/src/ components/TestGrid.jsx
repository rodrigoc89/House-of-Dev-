import React from "react";
import fakeData from "../../../server/fakeData/fakeHouse.json";
import "../styles/grid.css";
import Card from "../commons/Card";

const TestGrid = () => {
  return (
    <div className="GridContainer" style={{ maxWidth: "100%" }}>
      <div className="rowPropia">
        {fakeData.map((home) => {
          return (
            <div className="colPropia" style={{ padding: "1%" }}>
              <Card home={home} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestGrid;
