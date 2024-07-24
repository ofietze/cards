import LZString from "lz-string";
import { Deck } from "./pages/DeckViewer";
import { CardData } from "./components/CardDeck";

export const encodeDeck = (deck: Deck): string => {
  const cards = deck.cards.map((card) => ({
    q: card.question,
    a: card.answer,
  }));
  const shortenedDeck = { n: deck.name, c: cards };
  const json = JSON.stringify(shortenedDeck);
  const compressed = LZString.compressToEncodedURIComponent(json);
  return compressed;
};

export const decodeDeck = (encoded: string | undefined): Deck => {
  if (!encoded) {
    throw new Error("Encoded data was undefined");
  }
  const decompressed = LZString.decompressFromEncodedURIComponent(encoded);
  if (!decompressed) {
    throw new Error("Failed to decompress data");
  }
  const shortenedDeck: { n: string; c: { q: string; a: string }[] } =
    JSON.parse(decompressed);

  const cards: CardData[] = [];
  for (let index = 0; shortenedDeck.c[index]; index++) {
    const current = shortenedDeck.c[index];
    cards.push({ question: current.q, answer: current.a });
  }

  const name = shortenedDeck.n;

  return { name, cards };
};
