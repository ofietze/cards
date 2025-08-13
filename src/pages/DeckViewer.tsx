import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Deck, decodeDeck } from "../utils";
import CardDeck from "../components/CardDeck";
import "../components/Navbar.css";
import "./DeckViewer.css";

const DeckViewer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [deck, setDeck] = useState<Deck | null>(null);
  const [error, setError] = useState<string>("");
  const [shareUrl, setShareUrl] = useState<string>("");

  useEffect(() => {
    const hash = location.hash.substring(1);

    if (!hash) {
      setError("No deck data found in URL");
      return;
    }

    const decodedDeck = decodeDeck(hash);

    if (!decodedDeck) {
      setError("Invalid deck data in URL");
      return;
    }

    setDeck(decodedDeck);
    setShareUrl(window.location.href);
  }, [location.hash]);

  const copyShareUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Share URL copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy URL:", err);
      alert("Failed to copy URL. Please copy manually from the address bar.");
    }
  };

  if (error) {
    return (
      <div className="deck-viewer-error">
        <div className="error-container">
          <h2>Error Loading Deck</h2>
          <p>{error}</p>
          <button onClick={() => navigate("/")} className="nav-button">
            Go Home
          </button>
        </div>
      </div>
    );
  }

  if (!deck) {
    return (
      <div className="deck-viewer-loading">
        <p>Loading deck...</p>
      </div>
    );
  }

  return (
    <div className="deck-viewer">
      <nav className="navbar navbar-grid">
        <button onClick={() => navigate("/")} className="nav-button">
          ← Home
        </button>

        <h1 className="nav-app-title">{deck.name}</h1>

        <button onClick={copyShareUrl} className="nav-button">
          📋 Copy Share URL
        </button>
      </nav>

      <CardDeck deck={deck} />
    </div>
  );
};

export default DeckViewer;
