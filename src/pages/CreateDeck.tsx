import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateDeck.css";
import { encodeDeck } from "../utils";

interface CardData {
  question: string;
  answer: string;
}

const CreateDeck: React.FC = () => {
  const [deckName, setDeckName] = useState("");
  const [cards, setCards] = useState<CardData[]>([
    { question: "", answer: "" },
  ]);
  const navigate = useNavigate();

  const handleAddCard = () => {
    setCards([...cards, { question: "", answer: "" }]);
  };

  const handleCardChange = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const newCards = [...cards];
    newCards[index][field] = value;
    setCards(newCards);
  };

  const handleShareDeck = () => {
    const encodedDeck = encodeDeck({ name: deckName, cards });
    navigate(`/${encodedDeck}`);
  };

  return (
    <div className="create-deck">
      <h1>Create New Deck</h1>
      <div className="input-group">
        <label>Deck Name:</label>
        <input
          type="text"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
        />
      </div>
      {cards.map((card, index) => (
        <div key={index} className="card-input-group">
          <div className="input-group">
            <label>Question {index + 1}:</label>
            <input
              type="text"
              value={card.question}
              onChange={(e) =>
                handleCardChange(index, "question", e.target.value)
              }
            />
          </div>
          <div className="input-group">
            <label>Answer {index + 1}:</label>
            <input
              type="text"
              value={card.answer}
              onChange={(e) =>
                handleCardChange(index, "answer", e.target.value)
              }
            />
          </div>
        </div>
      ))}
      <button onClick={handleAddCard}>Add Question</button>
      <button onClick={handleShareDeck}>Share Deck</button>
    </div>
  );
};

export default CreateDeck;
