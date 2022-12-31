export const getPrahaar = () => {
  const date = new Date(Date.now());
  const hours = date.getHours();
  if (hours >= 0 && hours < 3) return 7;
  else if (hours >= 3 && hours < 6) return 8;
  else if (hours >= 6 && hours < 9) return 1;
  else if (hours >= 9 && hours < 12) return 2;
  else if (hours >= 12 && hours < 15) return 3;
  else if (hours >= 15 && hours < 18) return 4;
  else if (hours >= 18 && hours < 21) return 5;
  else if (hours >= 21 && hours < 24) return 6;
};
