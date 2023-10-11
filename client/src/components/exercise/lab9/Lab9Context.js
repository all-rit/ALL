import { createContext } from "react";

const GameStateContext = createContext({
  gameState: "",
  setGameState: () => {},
});

export default GameStateContext;
