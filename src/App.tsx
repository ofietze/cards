import React from "react";
import "./App.css";
import { Card } from "./Card";

function App() {
  return (
    <div className="App">
      <h1>Cards</h1>
      <div className="card-container">
        <Card question="Who's the cutest?" answer="Cami" />
        <Card question="What is 2 + 2?" answer="4" />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default App;
