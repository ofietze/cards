import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateDeck from './pages/CreateDeck';
import DeckViewer from './pages/DeckViewer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateDeck />} />
          <Route path="/view" element={<DeckViewer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;