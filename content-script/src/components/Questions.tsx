import React from "react";

const Questions = () => {
  const questions = [
    {
      text: "What country is the product from?",
      isChecked: false,
    },
    {
      text: "What country is the product from?",
      isChecked: false,
    },
    {
      text: "What country is the product from?",
      isChecked: false,
    },
  ];
  return (
    <div className="w-full space-y-2 mt-2">
      {questions.map((question, index) => (
        <div key={index} className="flex justify-between items-center px-2 py-3 border-[1px] border-gray-300">
          <label className="font-bold">{question.text}</label>
          <input type="checkbox" checked={question.isChecked} />
        </div>
      ))}
    </div>
  );
};

export default Questions;
