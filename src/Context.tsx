import React, { useState } from "react";
import { IBetInfo } from "./interfaces/IBetInfo";

type GlobalContextType = {
  betList: IBetInfo[];
  setBetList: React.Dispatch<React.SetStateAction<IBetInfo[]>>;
};

export const GlobalContext = React.createContext({} as GlobalContextType);

export const GlobalStorage = ({ children }: { children: React.ReactNode }) => {
  const [betList, setBetList] = useState<IBetInfo[]>([]);
  return (
    <GlobalContext.Provider value={{ betList, setBetList }}>
      {children}
    </GlobalContext.Provider>
  );
};
