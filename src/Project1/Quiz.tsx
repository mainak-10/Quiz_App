import  { useRef, useState } from 'react';

type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type QuestionWithAnswers = Question & {
  all_answers: string[];
};

const shuffleArray = (array: string[]): string[] => {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const optionLabels = ['A', 'B', 'C', 'D'];

const Quiz = () => {
  const [questions, setQuestions] = useState<QuestionWithAnswers[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  const categoryRef = useRef<HTMLSelectElement>(null);

  const fetchQuestions = async (categoryId: string) => {
    const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=medium&type=multiple`;
    const res = await fetch(url);
    const data = await res.json();

    const formattedQuestions: QuestionWithAnswers[] = data.results.map((q: Question) => ({
      ...q,
      all_answers: shuffleArray([q.correct_answer, ...q.incorrect_answers])
    }));

    setQuestions(formattedQuestions);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedAnswer(null);
  };

  const handleStartQuiz = () => {
    const selectedCategory = categoryRef.current?.value;

    if (!selectedCategory) {
      alert('Please select a category first.');
      return;
    }

    fetchQuestions(selectedCategory);
    setQuizStarted(true);
  };

  const handleAnswer = (answer: string): void => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);

    if (answer === questions[currentIndex].correct_answer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      const next = currentIndex + 1;
      if (next < questions.length) {
        setCurrentIndex(next);
        setSelectedAnswer(null);
      } else {
        setIsFinished(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedAnswer(null);
  };

  // Start screen - Centered content
  if (!quizStarted) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h2 className="mb-3">Select Category</h2>
          <select ref={categoryRef} className="form-select mb-3">
            <option value="">-- Select Category --</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals & Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Cartoons & Animations</option>
          </select>
          <button onClick={handleStartQuiz} className="btn btn-primary btn-lg">
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">Loading questions...</div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h2 className="mb-4">Your Score: {score} / {questions.length}</h2>
          <button className="btn btn-success btn-lg" onClick={handleRestart}>
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body text-center">
          <h6 className="text-muted mb-2">Question {currentIndex + 1} of {questions.length}</h6>
          <h5 className="card-title mb-4" dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />

          <div className="mt-3">
            {currentQuestion.all_answers.map((answer, idx) => {
              const isCorrect = answer === currentQuestion.correct_answer;
              const isSelected = selectedAnswer === answer;

              let btnClass = 'btn-outline-secondary';

              if (selectedAnswer) {
                if (isCorrect) btnClass = 'btn-success';
                else if (isSelected && !isCorrect) btnClass = 'btn-danger';
              }

              return (
                <button
                  key={idx}
                  className={`btn ${btnClass} btn-lg text-center d-block w-100 mb-3`}
                  onClick={() => handleAnswer(answer)}
                  disabled={!!selectedAnswer}
                >
                  <strong>{optionLabels[idx]}.</strong>{' '}
                  <span dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
