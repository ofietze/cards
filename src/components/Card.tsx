import React from "react";
import "./Card.css";
import { CardData } from "./CardDeck";

interface CardProps extends CardData {
  isFlipped: boolean;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({
  question,
  answer,
  isFlipped,
  onClick,
}) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="card-content">
        <div className="question">{question}</div>
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
};

export default Card;
