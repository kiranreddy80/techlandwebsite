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
 * Utility function to check if current date is in Valentine's season
 * Valentine's period: February 7th to February 21st
 * @returns {boolean} true if current date is in Valentine's period, false otherwise
 */
export const isValentineSeason = () => {
  const now = new Date();
  const month = now.getMonth(); // 1 for February
  const date = now.getDate();
  return month === 1 && date >= 7 && date <= 21 && !isShivaratriSeason(); // Valentine lower priority if overlap
};

/**
 * Utility function to check if current date is in Shivaratri season
 * Shivaratri 2026 is Feb 15, setting range Feb 14th to Feb 20th
 * @returns {boolean} true if current date is in Shivaratri period, false otherwise
 */
export const isShivaratriSeason = () => {
  const now = new Date();
  const month = now.getMonth(); // 1 for February
  const date = now.getDate();
  return month === 1 && date >= 14 && date <= 20;
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
  } else {
    return "Winter"; // December, January, February
  }
};
