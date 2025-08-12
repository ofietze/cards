import React, { useState } from 'react';
import { Deck } from '../utils';
import Card from './Card';
import './CardDeck.css';

interface CardDeckProps {
  deck: Deck;
}

const CardDeck: React.FC<CardDeckProps> = ({ deck }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < deck.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  if (deck.cards.length === 0) {
    return (
      <div className="card-deck-empty">
        <p>No cards in this deck.</p>
      </div>
    );
  }

  return (
    <div className="card-deck">
      <h2 className="deck-title">{deck.name}</h2>
      
      <div className="card-container">
        <Card 
          card={deck.cards[currentIndex]} 
          isFlipped={isFlipped} 
          onFlip={handleFlip} 
        />
      </div>

      <div className="card-info">
        <span>Card {currentIndex + 1} of {deck.cards.length}</span>
      </div>

      <div className="navigation">
        <button 
          onClick={handlePrevious} 
          disabled={currentIndex === 0}
          className="nav-button"
        >
          Previous
        </button>
        
        <button 
          onClick={handleFlip}
          className="flip-button"
        >
          {isFlipped ? 'Show Question' : 'Show Answer'}
        </button>
        
        <button 
          onClick={handleNext} 
          disabled={currentIndex === deck.cards.length - 1}
          className="nav-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardDeck;