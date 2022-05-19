export interface Pokemon {
  name: string;
  url?: string;
}

export interface PokemonsList {
  count: number;
  next?: string;
  previous?: string | null;
  results: Pokemon[];
}
