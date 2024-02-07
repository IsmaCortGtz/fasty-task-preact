export function validatePassword (password) {
  if (typeof password !== 'string') return false;
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?=.*[!@#$%^&*.\-_{}[\]="/()?¡'¿\\+^~¨·|¬])[A-Za-z\d?=.*[!@#$%^&*.\-_{}[\]="/()?¡'¿\\+^~¨·|¬]{8,50}$/.test(password);
}

export function validateUsername (username) {
  if (typeof username !== 'string') return false;
  return /^[a-zA-Z][a-zA-Z0-9]{4,19}$/.test(username);
}
