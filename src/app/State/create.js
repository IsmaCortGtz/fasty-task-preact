import { signal } from '@preact/signals';
import { loadStringStorage } from '../localStorage';
import { saveStateless, saveOneStateless } from './actions.js';

const savedStateKeys = {
  state: {},
  stateless: {
    API_URL: 'FASTY_TASK_PREACT_STATELESS_API_URL'
  }
};

export function createGlobalState () {
  const globalState = {
    state: {}, // Triggers rerender
    stateless: { // Will be saved in localstorage, but does not trigger rerender
      API_URL: loadStringStorage(savedStateKeys.stateless.API_URL)
    },
    stateTemp: { // Wont be saved in localstorage but triggers rerender
      CURRENT_PAGE: signal('/setup')
    },
    temp: { // Wont be saved in localstorage and does not trigger rerender
    },
    actions: {
      saveStateless: () => saveStateless(globalState, savedStateKeys),
      saveOneStateless: (key) => saveOneStateless(key, globalState, savedStateKeys)
    }
  };

  // effect to save state to localstorage (one effect for each key)
  // effect(() => saveStorage(globalState.state.VAR.value, savedStateKeys.state.VAR);

  return globalState;
}
