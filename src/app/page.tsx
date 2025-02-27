"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

export default function Home() {

  const quizName = 'Quiz de Curiosidades';
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false)

  const handleAnswered = (index: number) => {

    setAnswers([...answers, index])

    loadNextQuestion();

  }

  const loadNextQuestion = () => {

    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }

  }

  const restartQuiz = ()=> {

    setCurrentQuestion(0);
    setShowResult(false);

  }

  return (

    <div className="flex justify-center items-center bg-gradient-to-r from-pink-400 to-yellow-500 w-screen min-h-screen p-3 font-sans">

      <div className="bg-white flex flex-col rounded-lg">
        <h1 className="text-3xl p-6 font-bold">{quizName}</h1>

        <div className="border-t-2">
          <h1 className="px-6 pt-4 font-bold text-2xl"></h1>
          <div className="border-b-2 p-4">

            {!showResult &&
              <QuestionItem question={questions[currentQuestion]} count={currentQuestion} handleAnswered={handleAnswered}></QuestionItem>
            }

            {showResult &&
              <Results answers={answers} questions={questions}></Results>
            }

          </div>
        </div>

        {!showResult &&
          <p className="text-center p-6">{`${currentQuestion + 1} de ${questions.length} pergunta${questions.length > 1 ? 's' : ''}`}</p>
        }

        {showResult &&
          <div className="text-center p-2">
            <button onClick={restartQuiz} className="bg-sky-400 p-3 inline-block text-white w-32 rounded-md">Restart Quiz</button>
          </div>
        }

      </div>

    </div>

  );

}
