import React, { useEffect, useState } from "react";

interface Question {
  _id: string;
  questionText: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  topic: string;
}

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://backend-quiz-api.vercel.app/api/questions/random?count=10")
      .then(res => res.json())
      .then((data: Question[]) => {
        setQuestions(data);
        setLoading(false);
        console.log(data);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const q = questions[currentIndex];
     // console.log(q);
      const shuffled = [...q.incorrectAnswers, q.correctAnswer]
        .sort(() => Math.random() - 0.5);
      setOptions(shuffled);
      console.log(shuffled)
      setSelectedOption(null);
    }
  }, [currentIndex, questions]);

  const handleSelect = (option: string) => {
    if (selectedOption) return; // lock after selection
    setSelectedOption(option);

    if (option === questions[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const getOptionClass = (option: string) => {
    if (!selectedOption) return "list-group-item list-group-item-action";

    if (option === questions[currentIndex].correctAnswer) {
      return "list-group-item list-group-item-success";
    }

    if (option === selectedOption) {
      return "list-group-item list-group-item-danger";
    }

    return "list-group-item";
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="container mt-5">
        <div className="card text-center">
          <div className="card-body">
            <h2>Quiz Completed 🎉</h2>
            <h4>Score: {score} / {questions.length}</h4>
            <button
              className="btn btn-primary mt-3"
              onClick={() => window.location.reload()}
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header">
          <strong>Topic:</strong> {currentQuestion.topic}
          <div className="progress mt-2">
            <div
              className="progress-bar"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`
              }}
            ></div>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">
            Q{currentIndex + 1}. {currentQuestion.questionText}
          </h5>

          <ul className="list-group">
            {options.map(option => (
              <li
                key={option}
                className={getOptionClass(option)}
                style={{ cursor: "pointer" }}
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>

          <button
            className="btn btn-success mt-3"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentIndex + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
