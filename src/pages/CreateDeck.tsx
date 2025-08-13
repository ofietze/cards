import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardData, Deck, encodeDeck } from "../utils";
import CardEditor from "../components/CardEditor";
import DeckBuilder from "../components/DeckBuilder";
import "../components/Navbar.css";
import "./CreateDeck.css";

const CreateDeck: React.FC = () => {
  const navigate = useNavigate();
  const [deckName, setDeckName] = useState("");
  const [cards, setCards] = useState<CardData[]>([]);
  const [cardCounter, setCardCounter] = useState(1);

  const handleCardComplete = (question: string, answer: string) => {
    const newCard: CardData = { question, answer };
    setCards((prevCards) => [...prevCards, newCard]);
    setCardCounter((prevCounter) => prevCounter + 1);
  };

  const handleCreateDeck = () => {
    if (!deckName.trim()) {
      alert("Please enter a deck name");
      return;
    }

    if (cards.length === 0) {
      alert("Please create at least one card");
      return;
    }

    const deck: Deck = {
      name: deckName.trim(),
      cards: cards,
    };

    const encodedDeck = encodeDeck(deck);
    navigate(`/view#${encodedDeck}`);
  };

  const canCreateDeck = Boolean(deckName.trim() && cards.length > 0);

  return (
    <div className="create-deck">
      <nav className="navbar">
        <div className="nav-title-card">
          <h1 className="nav-app-title">Cards</h1>
        </div>
        <button onClick={() => navigate("/")} className="nav-button">
          Back to Home
        </button>
      </nav>

      <div className="create-deck-main">
        <div className="create-deck-content">
          <div className="create-deck-header">
            <h1 className="page-title">Create Your Deck</h1>
            <p className="page-subtitle">
              Write each card by flipping between question and answer, then
              watch them fly into your deck!
            </p>
          </div>

          <CardEditor
            onCardComplete={handleCardComplete}
            cardNumber={cardCounter}
          />
        </div>

        <DeckBuilder
          deckName={deckName}
          cards={cards}
          onDeckNameChange={setDeckName}
          onCreateDeck={handleCreateDeck}
          canCreateDeck={canCreateDeck}
        />
      </div>
    </div>
  );
};

export default CreateDeck;
