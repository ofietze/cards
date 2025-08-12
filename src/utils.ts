import LZString from 'lz-string';

export interface CardData {
  question: string;
  answer: string;
}

export interface Deck {
  name: string;
  cards: CardData[];
}

export function encodeDeck(deck: Deck): string {
  const jsonString = JSON.stringify(deck);
  return LZString.compressToEncodedURIComponent(jsonString);
}

export function decodeDeck(encodedDeck: string): Deck | null {
  try {
    const decompressed = LZString.decompressFromEncodedURIComponent(encodedDeck);
    if (!decompressed) return null;
    return JSON.parse(decompressed);
  } catch (error) {
    console.error('Error decoding deck:', error);
    return null;
  }
}