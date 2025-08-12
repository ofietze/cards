import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardDeck from '../components/CardDeck';
import { Deck } from '../utils';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const tutorialDeck: Deck = {
    name: "How to Use Cards",
    cards: [
      {
        question: "What is Cards?",
        answer: "Cards is a flashcard app that lets you create and share interactive decks with no backend required. Everything is stored in URLs!"
      },
      {
        question: "How do I create a new deck?",
        answer: "Click 'Create New Deck' below to start building your own flashcard deck with custom questions and answers."
      },
      {
        question: "How do cards work?",
        answer: "Click any card to flip between question and answer. Use Previous/Next buttons or the flip button to navigate through your deck."
      },
      {
        question: "How do I share a deck?",
        answer: "After creating your deck, you'll get a URL that contains your entire deck. Share this URL and others can view your cards immediately!"
      },
      {
        question: "Where is my data stored?",
        answer: "No servers needed! Your deck data is compressed and encoded directly into the URL using LZ-String compression."
      },
      {
        question: "Ready to create your own deck?",
        answer: "Click the 'Create New Deck' button below to get started building your first flashcard deck!"
      }
    ]
  };

  return (
    <div className="home">
      <div className="home-container">
        <CardDeck deck={tutorialDeck} />
        
        <div className="cta-section">
          <button 
            onClick={() => navigate('/create')}
            className="create-btn"
          >
            Create New Deck
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;