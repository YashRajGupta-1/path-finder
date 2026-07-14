import { createContext, useState } from "react";

export const SpeedContext = createContext(undefined);

export const SpeedProvider = ({ children }) => {
  const [speed, setSpeed] = useState(0.5);

  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};