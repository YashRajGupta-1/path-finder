import { createContext, useState } from "react";
import { createGrid } from "../utils/helpers";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";

export const PathfindingContext = createContext(undefined);

export const PathfindingProvider = ({ children }) => {
  const [algorithm, setAlgorithm] = useState("BFS");
  const [maze, setMaze] = useState("NONE");
  const [grid, setGrid] = useState(
    createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  );
  const [isGraphVisualized, setIsGraphVisualized] = useState(false);

  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </PathfindingContext.Provider>
  );
};