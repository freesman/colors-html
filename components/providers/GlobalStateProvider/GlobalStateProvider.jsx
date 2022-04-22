import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import GlobalStateContext from './GlobalStateContext';
import initialState from './initialState';

const GlobalStateProvider = ({ children }) => {
  const [globalState, changeState] = useState(initialState);

  const setState = useCallback(
    newState => {
      changeState(draft => ({
        ...draft,
        ...newState,
      }));
    },
    // eslint-disable-next-line
    [globalState]
  );

  return (
    // eslint-disable-next-line
    <GlobalStateContext.Provider value={{ globalState, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node,
};

export default GlobalStateProvider;
