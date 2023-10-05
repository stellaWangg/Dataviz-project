import React, { useEffect, useState } from "react";
import { resources } from "../../data/resources";
import PaginationButton from "./PaginationButton";
const Books = () => {
  const [newData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const bookResources = resources.filter((d) => d.category === "Books");
  const [currentPage, setCurrentPage] = useState(1);
  const contentsPerPage = 2;
  const startIndex = (currentPage - 1) * contentsPerPage;
  const endIndex = startIndex + contentsPerPage;
  const contentsToDisplay = newData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(newData.length / contentsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    try {
      setData(bookResources);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching resources:", error);
      setLoading(false);
    }
  }, [totalPages]);

  return (
    <div className="books-sec" id="books">
      <h2 className="text-center">- BOOKS -</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="d-flex p-3 mt-2 justify-content-evenly align-items-center flex-wrap">
          {contentsToDisplay.map((article, index) => {
            return (
              <a href={article.url} key={index}>
                <div className="card mb-2" style={{ width: "20vw" }}>
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

export default Books;
