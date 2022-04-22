import { useContext } from 'react';
import GlobalStateContext from 'providers/GlobalStateProvider/GlobalStateContext';

const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export default useGlobalState;
