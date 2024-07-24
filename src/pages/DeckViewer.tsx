import React from "react";
import CardDeck, { CardData } from "../components/CardDeck";
import "./DeckViewer.css";
import { useParams } from "react-router-dom";
import { decodeDeck } from "../utils";

export interface Deck {
  name: string;
  cards: CardData[];
}

export const DeckViewer = () => {
  const { encodedDeck } = useParams<{ encodedDeck: string }>();
  const decodedDeck = encodedDeck && decodeDeck(encodedDeck);

  return (
    <div className="App">
      <h1>{decodedDeck && decodedDeck.name}</h1>
      {decodedDeck && <CardDeck cards={decodedDeck.cards} />}
    </div>
  );
};

export default DeckViewer;