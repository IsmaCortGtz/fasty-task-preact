import { signal } from '@preact/signals';
import { loadStringStorage } from '../localStorage';
import { saveStateless, saveOneStateless, removeOneStateless } from './actions.js';

const savedStateKeys = {
  state: {},
  stateless: {
    API_URL: 'FASTY_TASK_PREACT_STATELESS_API_URL',
    USER_AUTH_JWT: 'FASTY_TASK_PREACT_STATELESS_USER_AUTH_JWT'
  }
};

export function createGlobalState () {
  const globalState = {
    state: {}, // Triggers rerender
    stateless: { // Will be saved in localstorage, but does not trigger rerender
      API_URL: loadStringStorage(savedStateKeys.stateless.API_URL),
      USER_AUTH_JWT: loadStringStorage(savedStateKeys.stateless.USER_AUTH_JWT)
    },
    stateTemp: { // Wont be saved in localstorage but triggers rerender
      CURRENT_PAGE: signal('/setup')
    },
    temp: { // Wont be saved in localstorage and does not trigger rerender
      APP_IS_ONLINE: true
    },
    actions: {
      saveStateless: () => saveStateless(globalState, savedStateKeys),
      saveOneStateless: (key) => saveOneStateless(key, globalState, savedStateKeys),
      removeOneStateless: (key) => removeOneStateless(key, globalState, savedStateKeys)
    }
  };

  // effect to save state to localstorage (one effect for each key)
  // effect(() => saveStorage(globalState.state.VAR.value, savedStateKeys.state.VAR);

  return globalState;
}
