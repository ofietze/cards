# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm start` (runs Vite dev server on http://localhost:5173/)
- **Build for production**: `npm run build` (TypeScript compilation + Vite build, outputs to `dist/` directory)
- **Preview production build**: `npm run preview` (serves production build locally)
- **Deploy to GitHub Pages**: `npm run deploy` (builds and deploys to gh-pages branch)

## Project Architecture

This is a React TypeScript application built with Vite for creating and viewing flashcard decks. The app uses hash-based routing for deck sharing and LZ-String compression for URL encoding.

### Build System

- **Vite**: Modern build tool replacing Create React App
- **Base path**: Configured as `/cards/` for production GitHub Pages deployment
- **Entry point**: `src/main.tsx` (Vite standard, not `src/index.tsx`)

### Core Components

- **App.tsx**: Main router using HashRouter with three routes: `/` (home), `/view` (deck viewer), `/create` (deck creator)
- **DeckViewer**: Displays cards from URL hash parameter, decodes compressed deck data
- **CreateDeck**: Form for creating new decks with dynamic card addition
- **CardDeck**: Interactive card display component with flip functionality and navigation
- **Card**: Individual card component (question/answer display)

### Data Flow

1. Decks are created in `CreateDeck` component
2. Deck data is compressed using `encodeDeck()` utility and added to URL hash
3. `DeckViewer` reads hash parameter and decompresses using `decodeDeck()`
4. `CardDeck` component manages card state (current index, flip state)

### Key Utilities

- **utils.ts**: Contains `encodeDeck()` and `decodeDeck()` functions for LZ-String compression/decompression
- **Card data structure**: `{ question: string, answer: string }`
- **Deck structure**: `{ name: string, cards: CardData[] }`

### Routing

Uses React Router HashRouter for GitHub Pages compatibility. Base path is dynamically set in vite.config.ts based on NODE_ENV for proper deployment paths.

### State Management

Local component state using React hooks. No global state management - deck sharing relies on URL hash parameters for persistence.