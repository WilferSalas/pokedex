export const getFormatedNumber = (number: number) => {
  if (number <= 9) {
    return `N.º00${number}`;
  } if (number <= 99) {
    return `N.º0${number}`;
  }

  return `N.º${number}`;
};

export default getFormatedNumber;
