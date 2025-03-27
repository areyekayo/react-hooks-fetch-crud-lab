import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  //initital fetch to render questions
  useEffect(()=> {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestions(questions))
  }, [])

  //console.log("app questions", questions)

  //callback function to pass to QuestionForm as prop
  function handleAddQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }
  //callback funciton to pass to QuestionList as prop
  function handleDeleteQuestion(updatedQuestions){
    setQuestions(updatedQuestions)
  }

  function handleUpdateQuestion(updatedQuestions){
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} handleDeleteQuestion={handleDeleteQuestion} handleUpdateQuestion={handleUpdateQuestion}/>}
    </main>
  );
}

export default App;
