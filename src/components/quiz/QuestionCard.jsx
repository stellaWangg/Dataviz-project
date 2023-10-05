import React, { useState } from "react";
import { Questions } from "./Questions";
import { Card } from "./StyleComponents";

const QuestionCard = ({ filteredData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [disable, setDisable] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswerResult, setShowAnswerResult] = useState("");
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  return (
    <Card>
      <Questions
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
        data={filteredData}
      />
    </Card>
  );
};

export default QuestionCard;
