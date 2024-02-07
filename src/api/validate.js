export async function validateAPI (rawURL) {
  // Format URL
  const apiUrl = rawURL.slice(-1) === '/' ? rawURL.slice(0, -1) : rawURL;

  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}/api/verify`)
      .then(result => result.text())
      .then(text => {
        if (text === 'fasty-task-server') return resolve(apiUrl);
        return reject(new Error('Invalid API URL'));
      })
      .catch(error => reject(new Error(`Invalid API URL: ${error}`)));
  });
}
