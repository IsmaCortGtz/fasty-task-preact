// Libs
import { saveStringStorage, saveStorage } from '../localStorage';

// Actions
export function saveStateless (globalState, savedStateKeys) {
  saveStringStorage(globalState.stateless.API_URL, savedStateKeys.stateless.API_URL);
}

export function saveOneStateless (key, globalState, savedStateKeys) {
  if (typeof globalState.stateless[key] === 'string') {
    saveStringStorage(globalState.stateless[key], savedStateKeys.stateless[key]);
    return;
  }

  saveStorage(globalState.stateless[key], savedStateKeys.stateless[key]);
}
