import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to cards</h1>
      <Link to="/N4IgdiBcICoKYGcAuIA0IDGUDaoCOUIA6gBYCGSA5AgARIlw0ZkAOAlkgPYA2NnAZnQY0ACpwBOSAK4BzMtwD8aEGUIAZNggBGnCAF9U">
        <button>Start a Game</button>
      </Link>
      <Link to="/create">
        <button>Create New Deck</button>
      </Link>
    </div>
  );
};

export default Home;
