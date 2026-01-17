// Basic chess opening book (grandmaster moves)
// Format: { moves: ["e2e4", "e7e5", ...], reply: "move" }
// For demo, only a few popular openings
const OPENING_BOOK = [
  { moves: [], reply: "e2e4" }, // First move
  { moves: ["e2e4"], reply: "e7e5" },
  { moves: ["e2e4", "e7e5"], reply: "Nf3" },
  { moves: ["e2e4", "e7e5", "Nf3"], reply: "Nc6" },
  { moves: ["d2d4"], reply: "d7d5" },
  { moves: ["d2d4", "d7d5"], reply: "c4" },
  { moves: ["d2d4", "d7d5", "c4"], reply: "e6" },
  // Add more lines for other openings
];

function getOpeningBookMove(moveHistory) {
  for (const entry of OPENING_BOOK) {
    if (JSON.stringify(entry.moves) === JSON.stringify(moveHistory)) {
      return entry.reply;
    }
  }
  return null;
}
