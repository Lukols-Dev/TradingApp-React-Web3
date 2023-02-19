export const timeConverter = (time: number | undefined) => {
  if (time) {
    return new Date(time * 1000).toLocaleString().split(",")[1];
  } else {
    return null;
  }
};
