import React, { useEffect, useState } from "react";
import News from "./News";
import Activist from "./Activist";
import Books from "./Books";
import Websites from "./Websites";

const Hero = () => {
  const navigateToResources = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      const yOffset = -window.innerHeight * 0.15; //bc the nav height is 12vh
      const y = targetSection.getBoundingClientRect().top + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="container">
      {/* <div class="input-group rounded mt-4">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div> */}

      <div className="d-flex p-4 mt-5 justify-content-evenly align-items-center flex-wrap text-center">
        <div
          className="card"
          style={{ width: "15rem" }}
          onClick={() => navigateToResources("news")}
        >
          <img
            className="card-img-top mx-auto pt-3"
            src="https://cdn-icons-png.flaticon.com/512/2537/2537856.png"
            alt="Card image cap"
            style={{ width: "30%" }}
          />
          <div className="card-body">
            <p className="fw-bold card-text">NEWS</p>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "15rem" }}
          onClick={() => navigateToResources("books")}
        >
          <img
            className="card-img-top mx-auto pt-3"
            src="https://cdn-icons-png.flaticon.com/512/10221/10221707.png"
            alt="Card image cap"
            style={{ width: "30%" }}
          />
          <div className="card-body">
            <p className="fw-bold card-text">BOOKS</p>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "15rem" }}
          onClick={() => navigateToResources("websites")}
        >
          <img
            className="card-img-top mx-auto pt-3"
            src="https://cdn-icons-png.flaticon.com/512/2274/2274641.png"
            alt="Card image cap"
            style={{ width: "30%" }}
          />
          <div className="card-body">
            <p className="fw-bold card-text">WEBSITES</p>
          </div>
        </div>
        <div
          className="card "
          style={{ width: "15rem" }}
          onClick={() => navigateToResources("activists")}
        >
          <img
            className="card-img-top mx-auto pt-3"
            src="https://cdn-icons-png.flaticon.com/512/8499/8499342.png"
            alt="Card image cap"
            style={{ width: "30%" }}
          />
          <div className="card-body">
            <p className="fw-bold card-text">ACTIVISTS</p>
          </div>
        </div>
      </div>
      <News></News>
      <Books></Books>
      <Websites></Websites>
      <Activist></Activist>
    </div>
  );
};

export default Hero;
