export const convertToLocalTime = (timestamp: string) => {
  if (timestamp) {
    const utcDate = new Date(timestamp);
    const options = { hour12: false };
    const localDate = utcDate.toLocaleString(undefined, options);
    return localDate;
  }
  return timestamp;
};
