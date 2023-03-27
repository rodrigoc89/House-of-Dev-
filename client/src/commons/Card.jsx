import React from "react";
import "../styles/grid.css";
import {
  MdOutlineAttachMoney,
  MdPhoneCallback,
  MdBedroomParent,
} from "react-icons/md";
import { RxRulerSquare } from "react-icons/rx";
import { FaMapMarkerAlt, FaBath } from "react-icons/fa";

const Card = ({ home }) => {
  console.log(home);
  const test = [];
  const cardSize = {
    width: "530px",
    height: "200px",
  };
  return (
    <div className="cardPropia" style={{ ...cardSize, margin: "0 auto" }}>
      <div className="imgSize">
        <img
          src={home.image}
          alt="not found"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <div className="infoContainer">
        <div className="gridInfo1">
          <p className="initInfo">
            <MdOutlineAttachMoney /> {home.price}
          </p>
          <p>
            <FaMapMarkerAlt />
            {home.address}
          </p>
        </div>
        <div className="gridInfo1">
          <p className="initInfo">
            <RxRulerSquare /> {home.m2} m²
          </p>
          <p>
            <MdBedroomParent /> {home.bedrooms}
          </p>
          <p>
            <FaBath /> {home.bathrooms}
          </p>
        </div>
        <div className="gridInfo1">
          <p className="initInfo">{home.description}</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            border: "1px solid blue",
            borderLeft: "none",
            height: "60%",
            padding: "1rem",
          }}
        >
          <button style={{ borderRadius: "50%", marginLeft: "2px" }}>
            ver mas...
          </button>
          <button
            style={{
              borderRadius: "100%",
              border: "0.5px solid blue",
              marginLeft: "2px",
            }}
          >
            <MdPhoneCallback />
          </button>
          <button style={{ borderRadius: "100%", border: "1px solid blue" }}>
            <MdOutlineAttachMoney />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
