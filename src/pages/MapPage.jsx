import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import LGBTQMap from "../components/maps/LGBTQMap";
import { GenderMap } from "../components/maps/GenderMap";
import { FreedomMap } from "../components/maps/FreedomMap";
const MapPage = () => {
  return (
    <>
      <Navbar />{" "}
      <div id="map-container">
        <LGBTQMap id="lgbtq-rights" selectedTheme={"lgbtq"} />
        <GenderMap id="gender-equality" selectedTheme={"gender"} />
        <FreedomMap id="freedom" selectedTheme={"freedom"} />
      </div>
    </>
  );
};

export default MapPage;
