import React from "react";

const Result = ({ score, data, finalResult }) => {
  return (
    <section
      className="text-white"
      style={{ display: `${finalResult ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-10">
            <div
              className={`text-light text-center p-5 rounded ${
                score > data.length / 2 ? "bg-success" : "bg-danger"
              }`}
            >
              <h2 className="mb-3 fw-bold">
                {score > data.length / 2 ? "Awesome!" : "Oops!"}
              </h2>
              <h3 className="mb-3 fw-bold">
                Your score is {score} out of {data.length}
              </h3>

              <button
                className="btn py-2 px-4 btn-light fw-bold d-inline"
                onClick={() => window.location.reload()}
              >
                Back Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
