export function loadStorage (key) {
  try {
    const result = window.localStorage.getItem(key);
    if (result === 'undefined') return undefined;
    return JSON.parse(result) || undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export function saveStorage (objectData, key) {
  try {
    window.localStorage.setItem(key, JSON.stringify(objectData));
  } catch (e) {
    console.error(e);
  }
}

export function loadStringStorage (key) {
  try {
    const result = window.localStorage.getItem(key);
    if (result === 'undefined') return undefined;
    return result || undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export function saveStringStorage (objectData, key) {
  try {
    window.localStorage.setItem(key, objectData);
  } catch (e) {
    console.error(e);
  }
}
