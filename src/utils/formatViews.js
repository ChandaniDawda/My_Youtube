export const formatViews = (views) => {
  if (!views) return "0";

  const count = Number(views);

  if (count >= 10000000) {
    return (count / 10000000).toFixed(1) + "Cr";
  }

  if (count >= 100000) {
    return (count / 100000).toFixed(1) + "L";
  }

  if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K";
  }

  return count;
};
