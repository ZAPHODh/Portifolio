import { createContext, useReducer } from 'react';
import { data, dataType } from './data';
import { Reducer, action } from './wordleReducer';

export type WordleGameProviderProps = {
  children: React.ReactNode;
};
export type WordleGameContextType = {
  state: dataType[][];
  dispatch: React.Dispatch<action>;
};
export const WordleGameContext = createContext<WordleGameContextType>({
  state: [],
  dispatch: () => null,
});

export const WordleGameProvider = ({ children }: WordleGameProviderProps) => {
  const [state, dispatch] = useReducer(Reducer, data);
  return (
    <WordleGameContext.Provider value={{ state, dispatch }}>
      {children}
    </WordleGameContext.Provider>
  );
};
