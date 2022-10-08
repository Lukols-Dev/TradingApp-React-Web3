export const DateTimeConverter = (date: number | undefined) => {
  if (date) {
    return new Date(date * 1000).toLocaleString().split(",")[0];
  } else {
    return null;
  }
};
