import React, { useEffect, useState } from "react";
import { resources } from "../../data/resources";
import PaginationButton from "./PaginationButton";
const Websites = () => {
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const websitesPerPage = 4;
  const startIndex = (currentPage - 1) * websitesPerPage;
  const endIndex = startIndex + websitesPerPage;
  const websitesToDisplay = newData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(newData.length / websitesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const webResources = resources.filter((d) => d.category === "Websites");

  useEffect(() => {
    try {
      setNewData(webResources);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching resources:", error);
      setLoading(false);
    }
  }, []);

  return (
    <div className="webs-sec" id="websites">
      <h2 className="text-center mt-5">- WEBSITES -</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="d-flex p-3 mt-2 justify-content-evenly align-items-center flex-wrap">
          {websitesToDisplay.map((article, index) => {
            return (
              <a href={article.url} key={index}>
                <div className="card mb-5" style={{ width: "30rem" }}>
                  <img
                    className="card-img-top card-img"
                    src={
                      article.img ||
                      "https://www.cipp.org.uk/static/295e2b63-d3f0-41ee-aadc811352116f87/standardbanner_750490e303797c08a9d12e23488ded69_4a7c7e45a350/Communicaton-bs394485614.png"
                    }
                    alt={article.name}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{article.name}</h6>
                    <p className="card-subtitle text-muted">
                      {article.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
      <PaginationButton
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      ></PaginationButton>
    </div>
  );
};

export default Websites;
