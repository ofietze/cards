import React from "react";
import { CardData } from "../utils";
import "./Card.css";

interface CardProps {
  card: CardData;
  isFlipped: boolean;
}

const Card: React.FC<CardProps> = ({ card, isFlipped }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-content">
            <h3>Question</h3>
            <p>{card.question}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="card-content">
            <h3>Answer</h3>
            <p>{card.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
