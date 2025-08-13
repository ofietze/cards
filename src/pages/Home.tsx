import React from "react";
import { useNavigate } from "react-router-dom";
import CardDeck from "../components/CardDeck";
import { Deck } from "../utils";
import "../components/Navbar.css";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const tutorialDeck: Deck = {
    name: "How to Use Cards",
    cards: [
      {
        question: "What is Cards?",
        answer:
          "Cards is a flashcard app that lets you create and share interactive decks with no backend required. Everything is stored in URLs!",
      },
      {
        question: "How do I share a deck?",
        answer:
          "After creating your deck, you'll get a URL that contains your entire deck. Share this URL and others can view your cards immediately!",
      },
      {
        question: "Where is my data stored?",
        answer:
          "No servers needed! Your deck data is compressed and encoded directly into the URL using LZ-String compression.",
      },
      {
        question: "Ready to create your own deck?",
        answer:
          "Click the 'Create New Deck' button to get started building your first flashcard deck!",
      },
    ],
  };

  return (
    <div className="home">
      <nav className="navbar">
        <div className="nav-title-card">
          <h1 className="nav-app-title">Cards</h1>
        </div>
        <button onClick={() => navigate("/create")} className="nav-button">
          Create New Deck
        </button>
      </nav>

      <div className="home-container">
        <CardDeck deck={tutorialDeck} />
      </div>
    </div>
  );
};

export default Home;
