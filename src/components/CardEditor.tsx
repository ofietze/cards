import React, { useState, useRef } from "react";
import "./CardEditor.css";

interface CardEditorProps {
  onCardComplete: (question: string, answer: string) => void;
  cardNumber: number;
}

const CardEditor: React.FC<CardEditorProps> = ({
  onCardComplete,
  cardNumber,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleFlip = () => {
    if (question.trim()) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleComplete = () => {
    if (question.trim() && answer.trim()) {
      setIsComplete(true);

      // Trigger flying animation after a short delay
      setTimeout(() => {
        onCardComplete(question.trim(), answer.trim());
        // Automatically reset for the next card after the animation
        setTimeout(() => {
          resetCard();
        }, 300);
      }, 800);
    }
  };

  const resetCard = () => {
    setIsFlipped(false);
    setQuestion("");
    setAnswer("");
    setIsComplete(false);
  };

  return (
    <div className="card-editor-container">
      <div className="card-editor-instructions">
        <p>
          {!isFlipped
            ? "Write your question, then flip the card"
            : "Write your answer, then complete the card"}
        </p>
      </div>

      <div
        ref={cardRef}
        className={`card-editor ${isFlipped ? "flipped" : ""} ${
          isComplete ? "completed" : ""
        }`}
      >
        <div className="card-editor-inner">
          <div className="card-editor-front">
            <div className="card-editor-header">
              <span className="card-number">Card #{cardNumber}</span>
              <span className="card-side-indicator">Question</span>
            </div>
            <textarea
              className="card-editor-textarea"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What's your question?"
              disabled={isComplete}
              autoFocus
            />
            <div className="card-editor-actions">
              <button
                type="button"
                onClick={handleFlip}
                disabled={!question.trim() || isComplete}
                className="flip-btn"
              >
                Flip to Answer →
              </button>
            </div>
          </div>

          <div className="card-editor-back">
            <div className="card-editor-header">
              <span className="card-number">Card #{cardNumber}</span>
              <span className="card-side-indicator">Answer</span>
            </div>
            <textarea
              className="card-editor-textarea"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="What's the answer?"
              disabled={isComplete}
            />
            <div className="card-editor-actions">
              <button
                type="button"
                onClick={handleFlip}
                disabled={isComplete}
                className="flip-btn secondary"
              >
                ← Flip back
              </button>
              <button
                type="button"
                onClick={handleComplete}
                disabled={!question.trim() || !answer.trim() || isComplete}
                className="complete-btn"
              >
                Add to Deck
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CardEditor;
