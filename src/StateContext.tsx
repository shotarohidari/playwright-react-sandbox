import React, { createContext, useContext, useState } from 'react';

type State = {
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
};
export const StateContext = createContext<State | undefined>(undefined);

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [flag, setFlag] = useState(false);
  return (
    <StateContext.Provider value={{ flag, setFlag }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(
      'おそらくプロバイダーの階層がおかしいとかプロバイダーが設定されてないとか'
    );
  }
  return context;
};
