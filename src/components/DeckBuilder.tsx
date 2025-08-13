import React from "react";
import { CardData } from "../utils";
import "./DeckBuilder.css";

interface DeckBuilderProps {
  deckName: string;
  cards: CardData[];
  onDeckNameChange: (name: string) => void;
  onCreateDeck: () => void;
  canCreateDeck: boolean;
}

const DeckBuilder: React.FC<DeckBuilderProps> = ({
  deckName,
  cards,
  onDeckNameChange,
  onCreateDeck,
  canCreateDeck,
}) => {
  return (
    <div className="deck-builder">
      <div className="deck-builder-header">
        <div className="deck-name-input-container">
          <input
            type="text"
            value={deckName}
            onChange={(e) => onDeckNameChange(e.target.value)}
            placeholder="Enter your deck name..."
            className="deck-name-input"
          />
        </div>
      </div>

      <div className="deck-visualization">
        <div className="deck-stack">
          {cards.length > 0 && (
            <>
              <h3 className="deck-title">
                {deckName || "Unnamed Deck"}
                <span className="card-count">
                  ({cards.length} card{cards.length !== 1 ? "s" : ""})
                </span>
              </h3>

              <div className="deck-cards">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="deck-card"
                    style={{
                      transform: `translateY(${-index * 3}px) translateX(${
                        index * 2
                      }px) rotate(${(index - cards.length / 2) * 2}deg)`,
                      zIndex: cards.length - index,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="deck-card-preview">
                      <div className="deck-card-question">
                        {card.question.length > 50
                          ? `${card.question.substring(0, 50)}...`
                          : card.question}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {cards.length === 0 && (
            <div className="empty-deck">
              <div className="empty-deck-placeholder">
                <h3>Your deck will appear here</h3>
                <p>Create cards to build your deck!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {cards.length > 0 && (
        <div className="deck-actions">
          <button
            onClick={onCreateDeck}
            disabled={!canCreateDeck}
            className="create-deck-btn"
          >
            Create & Share Deck
          </button>
          <div className="deck-stats">
            <span>
              {cards.length} card{cards.length !== 1 ? "s" : ""} ready
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeckBuilder;
