import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to cards</h1>
      <Link to="/N4IgdiBcILIIYGcAuBTATgAgCIoMYGsQAaEXKAbVAEcoQB1ACwEtcGMAbOMAcwFc5uKDEwQYkDIQHt2AExTIMAdzRMkqMBy58BQ5E3bthG3giFJJMuAE8A">
        <button>Start a Game</button>
      </Link>
      <Link to="/create">
        <button>Create New Deck</button>
      </Link>
    </div>
  );
};

export default Home;
