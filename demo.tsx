// must add coma after types <> in tsx
const randomElement = <T,>(list: T[]): T => {
  const randIndex = Math.floor(Math.random() * list.length);
  return list[randIndex];
};
