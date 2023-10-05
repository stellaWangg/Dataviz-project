import styled from "styled-components";

export const CategorySelect = styled.div`
  width:60%;
  margin:4% auto;
  padding: 2% 6%;
  -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            box-shadow: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
  @keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
              box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      }
    }
 @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 510px) {
    width: 90%;
  }
  @media (max-width: 428px) {
    width: 92%;
  }
`;
export const CategoryBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  width: 100%;
`;

// QuestionCard Component
export const Card = styled.div`
  width: 60%;
  height:75%;
   margin:4% auto;
  padding: 3%;
  -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            box-shadow: shadow-drop-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
  @keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
              box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      }
    }
 @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 510px) {
    width: 90%;
  }
  @media (max-width: 428px) {
    width: 92%;
  }
`;

// Question Component
export const Container = styled.div`
  font-size: 17px;
`;
export const QuestionNumber = styled.h3`
  font-weight: bold;
  margin-top: 2%;
`;
export const Content = styled.div`
  position: relative;
  top: 10px;
  @media (max-width: 500px) {
    top: 0;
  }
`;
export const QuestionText = styled.p`
  text-align: left;
  margin-top: 1%;
  @media (max-width: 428px) {
    font-size: 17px;
  }
  width: 85%;
  margin-left: 7%;
`;
export const QuestionCategory = styled.p`
  font-size: 14px;
  color: grey;
  margin: 0;
`;

// TopProgreesBar
export const ProgressBar = styled.div`
  margin-top: -1%;
`;

// Answer Component
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;
export const StyledButton = styled.button`
  padding: 1% 3%;
  width: 85%;
  margin: 10px;
  &:hover {
    background-color: rgba(241, 163, 19, 0.812);
  }
  @media (max-width: 500px) {
    width: 75%;
    margin: 2px;
  }
  @media (max-width: 428px) {
    font-size: 17px;
    width: 85%;
  }
`;
export const AnswerDiv = styled.div`
  width: 70%;
  margin: auto;
  padding: 30px;
  position: absolute;
  top: 15%;
  left: 15%;
  background-color: rgba(128, 176, 208, 0.9);
  text-align: justify;
  border-radius: 10px;
  color: black;
  @media (max-width: 500px) {
    margin: 3% 0 2% 0;
  }
  @media (max-width: 400px) {
    margin: 6% 0 8% 0;
  }
`;
export const Answer = styled.h3`
  font-weight: bold;
  text-align: center;
`;
export const NextQuestion = styled.button`
  margin: 1.5% auto;
  padding: 1% 3%;
  display: flex;
  border-radius: 10px;
  &:hover {
    background-color: rgba(224, 224, 224);
  }
  @media (max-width: 992px) {
    // margin-bottom: 5%;
  }
  @media (max-width: 768px) {
    margin-top: 5%;
  }
  @media (max-width: 650px) {
    margin-top: 6%;
  }
`;
