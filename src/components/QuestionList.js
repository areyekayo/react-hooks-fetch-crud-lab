import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDeleteQuestion, handleUpdateQuestion}) {

  //function to filter out deleted question and call handleDeleQuestion to set new state
  function deleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    handleDeleteQuestion(updatedQuestions)
  }

  //function to update question correct answer and call handleUpdateQuestion to set new state
  function updateQuestion(updatedQuestion){
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return {
          ...question,
          correctIndex: updatedQuestion.correctIndex,
        };
      }
      else {
        return question;
      }
    })
    handleUpdateQuestion(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => <QuestionItem key={question.id} question={question} onDeleteQuestion={deleteQuestion} onUpdateQuestion={updateQuestion}/>)}</ul>
    </section>
  );
}

export default QuestionList;
