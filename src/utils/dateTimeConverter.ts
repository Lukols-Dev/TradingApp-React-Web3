export const dateTimeConverter = (time: number | undefined) => {
  if (time) {
    return new Date(time * 1000).toLocaleString();
  } else {
    return null;
  }
};
