export const rateStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  return `${"★".repeat(fullStars)} ${hasHalfStar && "½"} ${"☆".repeat(
    5 - fullStars - (hasHalfStar ? 1 : 0)
  )}`;
};
