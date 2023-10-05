import React, { useState } from "react";
import Navbar from "../components/Navbar";
import QuestionCard from "../components/quiz/QuestionCard";
import { QuizSelect } from "../components/quiz/QuizSelect";
import { data } from "../data/quizQuestions";
const categories = [
  "LGBTQ+ Rights",
  "Gender Equality",
  "Freedom of Expression",
  "Anti-racism",
];

const QuizPage = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [categorySelected, setCategorySelected] = useState(null);
  const handleCategorySelection = (selectedCategory) => {
    const filteredQs = data.filter(
      (question) => question.category === selectedCategory
    );
    setFilteredData(filteredQs);
    setCategorySelected(true);
  };
  if (categorySelected === null) {
    return (
      <>
        <Navbar />
        <div className="quiz-figure">
          <img
            src="https://i.ibb.co/s2t624B/quiz-figure.png"
            alt="figure"
            loading="lazy"
          />
        </div>

        <QuizSelect
          categories={categories}
          onSelectCategory={handleCategorySelection}
        />
      </>
    );
  }

  // Render QuestionCard if a category is selected
  return (
    <>
      <Navbar />
      <div className="quiz-figure">
        <img src="https://i.ibb.co/s2t624B/quiz-figure.png" alt="figure" />
      </div>

      <QuestionCard filteredData={filteredData} />
    </>
  );
};

export default QuizPage;
