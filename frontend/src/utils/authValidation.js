export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim()) ? null : "Invalid email address.";
}

export function validatePassword(password) {
  if (password.length < 6) return "Password must be at least 6 characters.";
  return null;
}

export function validateUsername(username) {
  if (!username.trim()) return "Username is required.";
  if (username.length < 3) return "Username must be at least 3 characters.";
  return null;
}

export function validateConfirmPassword(password, confirm) {
  return password === confirm ? null : "Passwords do not match.";
}
