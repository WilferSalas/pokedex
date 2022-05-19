export const toggleFavorite = (name: string) => {
  let favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(name)) {
    favorites = favorites.filter((favorite) => favorite !== name);
  } else {
    favorites = [...favorites, name];
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const checkFavorites = (name: string): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(name);
};

export const getFavorites = (): string[] => {
  if (typeof window === 'undefined') return [];

  return JSON.parse(localStorage.getItem('favorites') || '[]');
};
