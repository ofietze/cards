import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Deck, decodeDeck } from '../utils';
import CardDeck from '../components/CardDeck';
import './DeckViewer.css';

const DeckViewer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [deck, setDeck] = useState<Deck | null>(null);
  const [error, setError] = useState<string>('');
  const [shareUrl, setShareUrl] = useState<string>('');

  useEffect(() => {
    const hash = location.hash.substring(1);
    
    if (!hash) {
      setError('No deck data found in URL');
      return;
    }

    const decodedDeck = decodeDeck(hash);
    
    if (!decodedDeck) {
      setError('Invalid deck data in URL');
      return;
    }

    setDeck(decodedDeck);
    setShareUrl(window.location.href);
  }, [location.hash]);

  const copyShareUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Share URL copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy URL:', err);
      alert('Failed to copy URL. Please copy manually from the address bar.');
    }
  };

  if (error) {
    return (
      <div className="deck-viewer-error">
        <div className="error-container">
          <h2>Error Loading Deck</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/')} className="home-btn">
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
      <div className="deck-header">
        <button onClick={() => navigate('/')} className="home-btn">
          ← Home
        </button>
        
        <div className="share-section">
          <button onClick={copyShareUrl} className="share-btn">
            📋 Copy Share URL
          </button>
        </div>
      </div>

      <CardDeck deck={deck} />
    </div>
  );
};

export default DeckViewer;