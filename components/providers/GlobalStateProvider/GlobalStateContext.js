import { createContext } from 'react';
import initialState from './initialState';

const GlobalStateContext = createContext({
  globalState: initialState,
  setState: () => {},
});

export default GlobalStateContext;
