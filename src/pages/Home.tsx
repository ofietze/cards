import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-container">
        <div className="hero-section">
          <h1>Cards</h1>
          <p className="subtitle">
            Create and share interactive flashcard decks with no backend required
          </p>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🃏</div>
              <h3>Create Custom Decks</h3>
              <p>Build flashcard decks with questions and answers</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🔄</div>
              <h3>Interactive Cards</h3>
              <p>Click to flip between question and answer sides</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🔗</div>
              <h3>URL-Based Sharing</h3>
              <p>Share complete decks via compressed URLs</p>
            </div>
          </div>

          <div className="cta-section">
            <button 
              onClick={() => navigate('/create')}
              className="create-btn"
            >
              Create New Deck
            </button>
            
            <div className="demo-info">
              <p>
                Or paste a shared deck URL in your browser to view someone else's deck
              </p>
            </div>
          </div>
        </div>

        <div className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <p>Create a new deck with custom questions and answers</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <p>Click "Create & Share Deck" to generate a URL</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <p>Share the URL - others can view your deck immediately</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <p>No server or database needed - everything is in the URL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;