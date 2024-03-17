import { QuestionsProps } from "@/ts/types";

const Questions = ({ addQuestion }: QuestionsProps) => {
  const questions = [
    "What country is the product from?",
    "Tell me more about this product.",
    "Do I need this product?",
  ];
  return (
    <ul className="w-full space-y-2 mt-2">
      {questions.map((question) => (
        <li key={question}>
          <button
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => addQuestion(question)}
          >
            <div className="block">
              <div className="w-full text-sm">{question}</div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Questions;
