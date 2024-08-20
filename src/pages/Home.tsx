import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to cards</h1>
      <Link to="/view#N4IgdiBcIFIIYAc5gAQEUCuBLAXiANCAMZQDaoAjlCAOoAWcALilgM4qN0CmKYcAtjwD2AMw7cUIrACdWzLvwRdpQ6SlEp4SMPg7S4AEyyMsQvgBtzATxREzrLAeVcD4niKEYwTtRq3IAfgIQOGoAUUVlVU0sfn4MEABffEpqeiYUAHc4dk4eE0ZzHgBzLAA3LlRGITcUfixzYzhpGyMiRiZVdky6GukMItd-VBEVflqARgAmTg4avJQJgE5ZokrGDGksLlYgwlDoAGVe4q8klJAqaHTmNlrGZXGPNQW7J3UxXrBo5Fd+VTg5nYTgq5iESlcACMbAthjseKwBJs4Fg9iFqAAhDCsOiOITnVLXXFEOgoaRcRqlMy6VRYUp8ExgYosVDDXRYMBlITmCq5CSZLq4hAfFAAawEWBQvyyORQ3DgZQaNg5InMGEqayhNmQRG2YGYyFibBMRBQCH07Swa12wQOIGOHOqBMuaQYtz5PD4ghFCyUWyErlGQnGEwAbAAGADMc0WAA5Q7GUAZNhzmT0raThmaLSaXFKzdyrTYNAzTBYWKxuUwyygABSI0VCUUYACUaLtABUJGEDDUAArKUwGJIAXUSQA">
        <button>Start a Game</button>
      </Link>
      <Link to="/create">
        <button>Create New Deck</button>
      </Link>
    </div>
  );
};

export default Home;
