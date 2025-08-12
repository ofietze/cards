# Cards

A React TypeScript flashcard application built with Vite for creating and sharing interactive study decks. Share entire decks through compressed URLs - no backend required.

## Features

- **Create Custom Decks**: Build flashcard decks with questions and answers
- **Interactive Cards**: Click to flip between question and answer sides
- **URL-Based Sharing**: Share complete decks via compressed URLs using LZ-String
- **GitHub Pages Compatible**: Uses hash-based routing for static hosting
- **No Data Storage**: All deck information is encoded in shareable links

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173/)
npm start

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## How It Works

1. Create a new deck at `/create` with custom questions and answers
2. Click "Share Deck" to generate a compressed URL containing all deck data
3. Share the URL with others - they can view and interact with your deck immediately
4. No server or database needed - everything is stored in the URL hash

## Live Demo

Visit the [live application](https://ofietze.github.io/cards) to try it out.
