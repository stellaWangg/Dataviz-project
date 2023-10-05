import React, { useEffect, useState } from "react";
import PaginationButton from "./PaginationButton";
const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState(
    "hate crime discrimination"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const fetchLocalData = () => {
      fetch("/sampleNews.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setNewsData(data[selectedTheme].slice(0, 40));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching local data:", error);
          setLoading(false);
        });
    };
    const url = `https://newsapi.org/v2/everything?q=${selectedTheme}&languege=en&apiKey=ce261521a5af45d1ae86ad3817725ee5`;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const latestNews = data.articles.slice(0, 40);
        setNewsData(latestNews);
        setLoading(false);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
        fetchLocalData();
        setLoading(false);
      });
  }, [selectedTheme]);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const contentsPerPage = 4;
  const startIndex = (currentPage - 1) * contentsPerPage;
  const endIndex = startIndex + contentsPerPage;
  const contentsToDisplay = newsData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(newsData.length / contentsPerPage);

  return (
    <div className="news-sec" id="news">
      <h2 className="text-center mt-5">- NEWS -</h2>

      <div className="theme-buttons d-flex justify-content-between">
        <button
          className={
            selectedTheme === "hate crime discrimination" ? "selected" : ""
          }
          onClick={() => setSelectedTheme("hate crime discrimination")}
        >
          Hate Crime
        </button>
        <button
          className={selectedTheme === "authoritarian" ? "selected" : ""}
          onClick={() => setSelectedTheme("authoritarian")}
        >
          Authoritarian
        </button>
        <button
          className={selectedTheme === "gender equality" ? "selected" : ""}
          onClick={() => setSelectedTheme("gender equality")}
        >
          Equality
        </button>
        <button
          className={selectedTheme === "racism" ? "selected" : ""}
          onClick={() => setSelectedTheme("racism")}
        >
          Racism
        </button>
      </div>

      {loading ? (
        <div className="text-center mb-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex p-3 mt-3 justify-content-evenly align-items-center  flex-wrap">
          {contentsToDisplay.map((article, index) => {
            return (
              <a href={article.url} key={index}>
                <div className="card mb-5" style={{ width: "30rem" }}>
                  <img
                    className="card-img-top news-card-img"
                    src={
                      article.urlToImage ||
                      "https://www.cipp.org.uk/static/295e2b63-d3f0-41ee-aadc811352116f87/standardbanner_750490e303797c08a9d12e23488ded69_4a7c7e45a350/Communicaton-bs394485614.png"
                    }
                    alt={article.title}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{article.title}</h6>
                    <p className="card-subtitle text-muted">
                      {formatDate(article.publishedAt)}
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

export default News;
