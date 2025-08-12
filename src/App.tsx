import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import CreateDeck from './pages/CreateDeck';
import DeckViewer from './pages/DeckViewer';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateDeck />} />
            <Route path="/view" element={<DeckViewer />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;