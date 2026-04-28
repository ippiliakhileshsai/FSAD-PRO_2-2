import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../../utils/constants';
import QuizQuestion from './QuizQuestion';
import QuizProgress from './QuizProgress';
import ResultsSection from './ResultsSection';
import Button from '../ui/Button';

export default function QuizSection() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleNext = () => {
    if (currentQ < QUIZ_QUESTIONS.length - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) setCurrentQ(prev => prev - 1);
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    return <ResultsSection answers={answers} onRestart={handleRestart} />;
  }

  const question = QUIZ_QUESTIONS[currentQ];
  const hasAnswer = answers[question.id] !== undefined;

  return (
    <div className="quiz-container">
      <QuizProgress current={currentQ + 1} total={QUIZ_QUESTIONS.length} />
      
      <QuizQuestion
        question={question}
        selectedAnswer={answers[question.id]}
        onAnswer={(idx) => handleAnswer(question.id, idx)}
      />

      <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
        {currentQ > 0 && (
          <Button variant="ghost" onClick={handlePrev}>
            Previous
          </Button>
        )}
        <Button 
          variant="primary" 
          onClick={handleNext}
          disabled={!hasAnswer}
          style={{ marginLeft: 'auto' }}
        >
          {currentQ === QUIZ_QUESTIONS.length - 1 ? 'See Results' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
