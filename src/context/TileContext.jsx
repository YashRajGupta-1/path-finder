import { createContext, useState } from "react";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constants";

export const TileContext = createContext(undefined);

export const TileProvider = ({ children }) => {
  const [startTile, setStartTile] = useState(START_TILE_CONFIGURATION);
  const [endTile, setEndTile] = useState(END_TILE_CONFIGURATION);

  return (
    <TileContext.Provider
      value={{
        startTile,
        setStartTile,
        endTile,
        setEndTile,
      }}
    >
      {children}
    </TileContext.Provider>
  );
};