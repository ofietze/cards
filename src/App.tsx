import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeckViewer from "./pages/DeckViewer";
import Home from "./pages/Home";
import CreateDeck from "./pages/CreateDeck";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:encodedDeck" element={<DeckViewer />} />
          <Route path="/create" element={<CreateDeck />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
