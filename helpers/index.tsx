export const moneyFormat = (money: number) => {
  return money.toLocaleString();
};

export const starsCount = (rating: number) => {
  const isPositive = rating >= 0; // sayının pozitif olup olmadığını kontrol ediyoruz
  const decimalPart = Math.abs(rating % 1); // ondalık kısmı alıyoruz
  if (decimalPart < 0.25) {
    return isPositive ? Math.floor(rating) : Math.ceil(rating); // yarım yuvarlama işlemi
  } else if (decimalPart >= 0.25 && decimalPart < 0.75) {
    return isPositive ? Math.floor(rating) + 0.5 : Math.ceil(rating) - 0.5; // yarım yuvarlama işlemi
  } else {
    return isPositive ? Math.ceil(rating) : Math.floor(rating); // yarım yuvarlama işlemi
  }
};
