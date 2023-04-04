import { dataType } from './data';

export type action = {
  type: 'ADD_LETTER' | 'SET_ISCORRECT' | 'RESET_DATA' | null;
  payload: {
    position?: number;
    letter?: string;
    isCorrect?: 'correct' | 'almost' | 'dont' | undefined;
    itemIndex?: number;
  };
};

export const Reducer = (state: dataType[][], action: action) => {
  switch (action.type) {
    case 'ADD_LETTER':
      state[action.payload.position as number].push({
        letter: action.payload.letter as string,
        isCorrect: 'dont',
      });
      return [...state];
    case 'SET_ISCORRECT':
      return state.map((arr, index) => {
        if (index === action.payload.position) {
          return arr.map((item, itemIndex) => {
            if (itemIndex === action.payload.itemIndex) {
              return {
                ...item,
                isCorrect: action.payload.isCorrect as
                  | 'correct'
                  | 'almost'
                  | 'dont',
              };
            }
            return item;
          });
        }
        return arr;
      });
    case 'RESET_DATA':
      return [[], [], [], [], []];
    default:
      return [...state];
  }
};
