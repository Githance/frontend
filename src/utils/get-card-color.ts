export const getCardColor = (index: number): string => {
  const cardColors = ['#CAE1FF', '#FBF6C3', '#EDE2FF', '#F6D2D1'];
  const numColors = cardColors.length;
  return cardColors[index % numColors];
};
