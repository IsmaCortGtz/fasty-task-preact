export async function singup (apiUrl, credentials) {
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}/api/v1/user/singup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(jsonData => {
        if (jsonData.token) return resolve(jsonData);
        return reject(jsonData);
      })
      .catch(error => reject(error));
  });
}

export async function login (apiUrl, credentials) {
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}/api/v1/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(jsonData => {
        if (jsonData.token) return resolve(jsonData);
        return reject(jsonData);
      })
      .catch(error => reject(error));
  });
}
