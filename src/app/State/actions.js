// Libs
import { saveStringStorage, saveStorage, removeStorage } from '../localStorage';

// Actions
export function saveStateless (globalState, savedStateKeys) {
  saveStringStorage(globalState.stateless.API_URL, savedStateKeys.stateless.API_URL);
  saveStringStorage(globalState.stateless.USER_AUTH_JWT, savedStateKeys.stateless.USER_AUTH_JWT);
}

export function saveOneStateless (key, globalState, savedStateKeys) {
  if (typeof globalState.stateless[key] === 'string') {
    saveStringStorage(globalState.stateless[key], savedStateKeys.stateless[key]);
    return;
  }

  saveStorage(globalState.stateless[key], savedStateKeys.stateless[key]);
}

export function removeOneStateless (key, globalState, savedStateKeys) {
  removeStorage(savedStateKeys.stateless[key]);
  globalState[key] = undefined;
}
