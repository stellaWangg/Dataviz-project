import React from "react";
import { CategorySelect } from "./StyleComponents";
import { CategoryBtns } from "./StyleComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
export const QuizSelect = ({ categories, onSelectCategory }) => {
  return (
    <CategorySelect>
      <h3 className="quiz-select">
        Test Your Knowledge <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
      </h3>
      <CategoryBtns>
        <button
          key={"lgbtq"}
          onClick={() => onSelectCategory(categories[0])}
          className="category-btn"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/8969/8969046.png"
            alt="lgbtq"
          />
          <p>LGBTQ+ Rights</p>
        </button>
        <button
          onClick={() => onSelectCategory(categories[1])}
          className="category-btn"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3002/3002609.png"
            alt="gender equality"
          />
          <p>Gender Equality</p>
        </button>
        <button
          onClick={() => onSelectCategory(categories[2])}
          className="category-btn"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4918/4918977.png"
            alt="humanrights"
          />
          <p>Freedom of Speech</p>
        </button>
        <button
          onClick={() => onSelectCategory(categories[3])}
          className="category-btn"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5299/5299853.png"
            alt="humanrights"
          />
          <p>Anti Racism</p>
        </button>
      </CategoryBtns>
    </CategorySelect>
  );
};
