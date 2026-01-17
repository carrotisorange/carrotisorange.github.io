// Sample grandmaster games database (for demo)
// Format: [{ moves: ["e2e4", "e7e5", ...], next: "move" }]
const GRANDMASTER_GAMES = [
  { moves: ["e2e4", "e7e5", "Nf3", "Nc6"], next: "Bb5" }, // Ruy Lopez
  { moves: ["d2d4", "d7d5", "c4", "e6", "Nc3", "Nf6"], next: "Bg5" }, // Queen's Gambit
  // Add more lines for other famous games
];

function getGrandmasterMove(moveHistory) {
  for (const entry of GRANDMASTER_GAMES) {
    if (JSON.stringify(entry.moves) === JSON.stringify(moveHistory)) {
      return entry.next;
    }
  }
  return null;
}
