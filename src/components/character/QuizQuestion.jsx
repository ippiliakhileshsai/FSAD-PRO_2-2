export default function QuizQuestion({ question, selectedAnswer, onAnswer }) {
  return (
    <div className="quiz-question">
      <h3>{question.question}</h3>
      <div className="quiz-options">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className={`quiz-option ${selectedAnswer === idx ? 'selected' : ''}`}
            onClick={() => onAnswer(idx)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
