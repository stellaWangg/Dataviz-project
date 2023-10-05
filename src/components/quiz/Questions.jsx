import React from "react";
import Answers from "./Answers";
import TopProgressBar from "./TopProgressBar.js";
import {
  Container,
  QuestionNumber,
  Content,
  QuestionText,
  QuestionCategory,
} from "./StyleComponents";

export const Questions = ({
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
  selectedCategory,
  setSelectedCategory,
  data,
  finalResult,
  setFinalResult,
}) => {
  console.log(data);
  return (
    <Container>
      <TopProgressBar userAnswer={userAnswer} totalQuestions={data.length} />
      <QuestionNumber>
        Questions {currentQuestion + 1} of {data.length}
        <br />
      </QuestionNumber>

      <QuestionCategory>
        Category: {data[currentQuestion].category}
      </QuestionCategory>

      <Content>
        <QuestionText>{data[currentQuestion].question}</QuestionText>

        <Answers
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          disable={disable}
          setDisable={setDisable}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
          showAnswerResult={showAnswerResult}
          setShowAnswerResult={setShowAnswerResult}
          score={score}
          setScore={setScore}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          showDescription={showDescription}
          setShowDescription={setShowDescription}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          data={data}
          finalResult={finalResult}
          setFinalResult={setFinalResult}
        />
      </Content>
    </Container>
  );
};
