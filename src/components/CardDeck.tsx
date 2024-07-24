import React, { useState } from "react";
import Card from "./Card";
import "./CardDeck.css";

export interface CardData {
  question: string;
  answer: string;
}

interface CardDeckProps {
  cards: CardData[];
}

const CardDeck: React.FC<CardDeckProps> = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsFlipped(false); // Reset flip state when moving to the next card
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const card = cards.at(currentCardIndex);

  return (
    <div className="card-deck">
      {card && (
        <Card
          question={card.question}
          answer={card.answer}
          isFlipped={isFlipped}
          onClick={handleCardClick}
        />
      )}

      <button className="next-button" onClick={handleNextCard}>
        Next Card
      </button>
    </div>
  );
};

export default CardDeck;
