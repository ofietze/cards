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

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    setIsFlipped(false);
  };

  const getCardStyle = (index: number) => {
    const offset = index - currentIndex;
    const baseOffset = 60; // Pixels to offset each card
    
    if (offset === 0) {
      // Active card - centered
      return {
        transform: 'translateX(0px)',
        zIndex: 10
      };
    } else if (offset < 0) {
      // Cards to the left - stack behind on left side
      return {
        transform: `translateX(${offset * baseOffset}px)`,
        zIndex: 10 + offset
      };
    } else {
      // Cards to the right - stack behind on right side  
      return {
        transform: `translateX(${offset * baseOffset}px)`,
        zIndex: 10 - offset
      };
    }
  };

  return (
    <div className="card-deck">
      <h2 className="deck-title">{deck.name}</h2>
      
      <div className="cards-row">
        {deck.cards.map((card, index) => (
          <div 
            key={index}
            className={`card-wrapper ${index === currentIndex ? 'active' : ''}`}
            style={getCardStyle(index)}
            onClick={() => handleCardClick(index)}
          >
            <Card 
              card={card} 
              isFlipped={index === currentIndex ? isFlipped : false} 
              onFlip={index === currentIndex ? handleFlip : () => {}}
            />
          </div>
        ))}
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