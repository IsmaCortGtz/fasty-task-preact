import { createContext } from 'preact';
import { createGlobalState } from './create';

const globalState = createGlobalState();
const GlobalStateContext = createContext(globalState);

function GlobalStateProvider ({ children }) {
  return (
    <GlobalStateContext.Provider value={globalState}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export { GlobalStateContext, GlobalStateProvider };
