import React, { useState } from "react";
import "./Card.css";

export const Card = ({
  question,
  answer,
}: {
  question: string;
  answer?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="card-content">
        <div className="card-front">{question}</div>
        <div className="card-back">{answer}</div>
      </div>
    </div>
  );
};
