export const getPropertyFromLocalStorage = (key: string, value: string) => {
  const ls = window.localStorage.getItem(key);

  if (ls) {
    const parseLs = JSON.parse(ls);
    return parseLs && parseLs[value];
  }

  return false;
};
