import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardData, Deck, encodeDeck } from '../utils';
import './CreateDeck.css';

const CreateDeck: React.FC = () => {
  const navigate = useNavigate();
  const [deckName, setDeckName] = useState('');
  const [cards, setCards] = useState<CardData[]>([{ question: '', answer: '' }]);

  const addCard = () => {
    setCards([...cards, { question: '', answer: '' }]);
  };

  const removeCard = (index: number) => {
    if (cards.length > 1) {
      setCards(cards.filter((_, i) => i !== index));
    }
  };

  const updateCard = (index: number, field: 'question' | 'answer', value: string) => {
    const updatedCards = cards.map((card, i) => 
      i === index ? { ...card, [field]: value } : card
    );
    setCards(updatedCards);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!deckName.trim()) {
      alert('Please enter a deck name');
      return;
    }

    const validCards = cards.filter(card => 
      card.question.trim() && card.answer.trim()
    );

    if (validCards.length === 0) {
      alert('Please add at least one card with both question and answer');
      return;
    }

    const deck: Deck = {
      name: deckName.trim(),
      cards: validCards
    };

    const encodedDeck = encodeDeck(deck);
    navigate(`/view#${encodedDeck}`);
  };

  return (
    <div className="create-deck">
      <div className="create-deck-container">
        <h1>Create New Deck</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="deck-name-section">
            <label htmlFor="deckName">Deck Name:</label>
            <input
              type="text"
              id="deckName"
              value={deckName}
              onChange={(e) => setDeckName(e.target.value)}
              placeholder="Enter deck name"
              required
            />
          </div>

          <div className="cards-section">
            <h2>Cards</h2>
            
            {cards.map((card, index) => (
              <div key={index} className="card-form">
                <div className="card-form-header">
                  <h3>Card {index + 1}</h3>
                  {cards.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCard(index)}
                      className="remove-card-btn"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="card-form-fields">
                  <div className="field">
                    <label htmlFor={`question-${index}`}>Question:</label>
                    <textarea
                      id={`question-${index}`}
                      value={card.question}
                      onChange={(e) => updateCard(index, 'question', e.target.value)}
                      placeholder="Enter question"
                      required
                    />
                  </div>
                  
                  <div className="field">
                    <label htmlFor={`answer-${index}`}>Answer:</label>
                    <textarea
                      id={`answer-${index}`}
                      value={card.answer}
                      onChange={(e) => updateCard(index, 'answer', e.target.value)}
                      placeholder="Enter answer"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addCard}
              className="add-card-btn"
            >
              Add Another Card
            </button>
          </div>

          <div className="form-actions">
            <button type="submit" className="create-deck-btn">
              Create & Share Deck
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/')}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDeck;