/**
 * Returns the current year.
 * @returns {number} - The current year.
 */
export function getFullYear() {
return new Date().getFullYear();
}

/**
 * Returns a footer message based on the value of isIndex.
 * @param {boolean} isIndex - If true, returns "Holberton School". Otherwise, returns "Holberton School main dashboard".
 * @returns {string} - The footer message.
 */
export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
