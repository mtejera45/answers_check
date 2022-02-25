import React from "react";
import './style.css';
import Check from "./components/Check";
import NextExerciseButton from "./components/NextExerciseButton";

export default function App() {

  const[answerOne, setAnswerOne] = React.useState({
    checkAnswerString: "", 
    checkAnswerTrueFalse: null})
  const[answerTwo, setAnswerTwo] = React.useState({
    checkAnswerString: "", 
    checkAnswerTrueFalse: null});

  const expresiones ={
    answerOneCheck: /(My name is Miguel|My name is Penny)/i,
    answerTwoCheck: /(I am 30 years old|I'm 30 years old)/i,
  }

  return (
      <div className="counter-box">
          <Check
            type="text"
            label="What is your name?"
            name="answer" 
            placeholder="Your awnser here..."
            expresionRegular={expresiones.answerOneCheck}
            answerState={answerOne}
            answerSetState={setAnswerOne}
          />
          <Check
            type="text"
            label="How old are you?"
            name="answer" 
            placeholder="Your awnser here..."
            expresionRegular={expresiones.answerTwoCheck}
            answerState={answerTwo}
            answerSetState={setAnswerTwo}
          />
          <NextExerciseButton
          answer_one={answerOne.checkAnswerTrueFalse}
          answer_two={answerTwo.checkAnswerTrueFalse}
          className="buttonone"
          />

      </div>

  );
}