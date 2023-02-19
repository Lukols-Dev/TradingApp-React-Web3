export const currentDate = (dayLeft?: number, separator?: boolean) => {
  const date = new Date();
  let formattedDate = "";

  if (dayLeft) {
    const anotherDate = new Date(date);
    anotherDate.setDate(date.getDate() - dayLeft);
    formattedDate = anotherDate.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } else {
    formattedDate = date.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return separator ? formattedDate.replace(/\./g, "_") : formattedDate;
};

export const reverseDate = (date: string) => {
  return date.split("_").reverse().join("_");
};
