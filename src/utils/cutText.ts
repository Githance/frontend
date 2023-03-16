export const cutText = (text: string, n: number) => {
  if (text.length > n) {
    return text.substring(0, n) + "...";
  } else {
    return text;
  }
};
