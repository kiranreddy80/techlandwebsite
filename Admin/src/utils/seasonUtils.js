/**
 * Utility function to check if current date is in winter season
 * Winter months: December (11), January (0), February (1)
 * @returns {boolean} true if current month is winter, false otherwise
 */
export const isWinterSeason = () => {
  const currentMonth = new Date().getMonth(); // 0-11 (Jan is 0, Dec is 11)
  // Winter months: December (11), January (0), February (1)
  return currentMonth === 11 || currentMonth === 0 || currentMonth === 1;
};

/**
 * Get current season name
 * @returns {string} Season name
 */
export const getCurrentSeason = () => {
  const currentMonth = new Date().getMonth();

  if (currentMonth >= 2 && currentMonth <= 4) {
    return "Spring"; // March, April, May
  } else if (currentMonth >= 5 && currentMonth <= 7) {
    return "Summer"; // June, July, August
  } else if (currentMonth >= 8 && currentMonth <= 10) {
    return "Autumn"; // September, October, November
  } else {a                                                                                                                                                                                                                                                                                                                                                             
    return "Winter"; // December, January, February
  }
};
