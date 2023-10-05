import React from "react";
import { ProgressBar } from "./StyleComponents";

const TopProgressBar = ({ userAnswer, totalQuestions }) => {
  const QuestionAttemptedPercentage = (userAnswer / totalQuestions) * 100;
  console.log(QuestionAttemptedPercentage);
  return (
    <ProgressBar>
      <div className="progress">
        <div
          className="progress-bar"
          style={{
            width: `${QuestionAttemptedPercentage}%`,
            backgroundColor: "#5D9C59",
          }}
          role="progressbar"
        />
      </div>
    </ProgressBar>
  );
};

export default TopProgressBar;
