import React, { useState, useEffect } from "react";
// import { data } from "../../data/quizQuestions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonDiv,
  StyledButton,
  AnswerDiv,
  Answer,
  NextQuestion,
} from "./StyleComponents";
import Result from "./Result";

const Answers = ({
  currentQuestion,
  setCurrentQuestion,
  disable,
  setDisable,
  showAnswer,
  setShowAnswer,
  showAnswerResult,
  setShowAnswerResult,
  score,
  setScore,
  userAnswer,
  setUserAnswer,
  showDescription,
  setShowDescription,
  data,
}) => {
  const [allOptions, setAllOptions] = useState("");
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [finalResult, setFinalResult] = useState(false);
  useEffect(() => {
    const answerOptions = data[currentQuestion].options;
    setAllOptions(answerOptions);
  }, [currentQuestion]);

  const totalQuestions = data.length;
  const handleAnswerCheck = (e) => {
    setDisable(true);
    setUserAnswer(userAnswer + 1);
    setAnswerSelected(true);
    setSelectedAnswer(e.target.innerText);

    if (e.target.innerText === data[currentQuestion].answer) {
      setScore(score + 1);
      setShowAnswerResult("Correct");
    } else {
      setShowAnswerResult("Wrong");
    }
    setShowAnswer(true);
    setShowDescription(true); // Show description for both correct and wrong answers
  };

  const handleNextButtonClick = () => {
    setDisable(false);
    setShowAnswer(false);
    setSelectedAnswer(null);
    setAnswerSelected(false);
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };
  if (finalResult) {
    return (
      <Result score={score} data={data} finalResult={finalResult}></Result>
    );
  }
  const addClass = (option) => {
    if (!answerSelected) {
      return "";
    }
    if (option === data[currentQuestion].answer) {
      return "correct";
    }
    if (option === selectedAnswer) {
      return "selected";
    }
  };

  return (
    <div>
      <ButtonDiv>
        {allOptions &&
          allOptions.map((option, i) => (
            <StyledButton
              key={i}
              disabled={disable}
              onClick={handleAnswerCheck}
              className={addClass(option)}
            >
              {option}
            </StyledButton>
          ))}
      </ButtonDiv>

      <>
        {showAnswer ? (
          <AnswerDiv>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setShowAnswer(false)}
              style={{
                fontSize: "30px",
                cursor: "pointer",
                position: "absolute",
                top: "10px",
                right: "20px",
              }}
            />
            <Answer>{showAnswerResult}</Answer>
            {showDescription && (
              <div>Related knowledge: {data[currentQuestion].description}</div>
            )}
          </AnswerDiv>
        ) : (
          ""
        )}
      </>

      <NextQuestion disabled={!disable} onClick={handleNextButtonClick}>
        {currentQuestion + 1 >= totalQuestions ? "Finish" : "Next"}
      </NextQuestion>
    </div>
  );
};

export default Answers;
