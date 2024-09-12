import React, { useEffect, useState } from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;
  const options = answers.map((answer, index) => (
        <option key={index} value={index}>
          {answer}
        </option>
      ))
  const [selectedIndex, setSelectedIndex] = useState(correctIndex);
  useEffect(() => {
    setSelectedIndex(correctIndex);
  }, [correctIndex]);

  function handleAnswerChange(event) {
    const newCorrectIndex = parseInt(event.target.value);
    setSelectedIndex(newCorrectIndex); 
    onUpdate(id, { ...question, correctIndex: newCorrectIndex });
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={selectedIndex} onChange={handleAnswerChange}>{options}</select>
      </label>
      <button onClick={() => onDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
