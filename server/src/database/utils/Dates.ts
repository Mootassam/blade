export default class Dates {
  static getDate() {
    const dubaiTimezone = "Asia/Dubai";
    const options = { timeZone: dubaiTimezone };
    const currentDateTime = new Date().toLocaleString("en-US", options);

    // Get the current date in UTC format
    const utcDateTime = new Date(currentDateTime).toISOString();
    return utcDateTime;
  }

  static getTimeZoneDate() {
    const dubaiTimezone = "Asia/Dubai";
    const options = {
      timeZone: dubaiTimezone,
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
    const currentDateTime = new Date().toLocaleDateString("en-US", options);

    return currentDateTime;
  }
}