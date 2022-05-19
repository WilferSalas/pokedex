// @packages
import axios from 'axios';
import { useQuery } from 'react-query';

// @interfaces
import { PokemonInfo, PokemonsList } from '../interfaces';

const client = 'https://pokeapi.co/api/v2';

export const getPokemons = () => axios.get<PokemonsList>(`${client}/pokemon?limit=151`).then((res) => res.data);

export const getPokemon = (name: string) => axios.get<PokemonInfo>(`${client}/pokemon/${name}`).then((res) => res.data);

export const getPokemonByNames = (names?: string[]) => {
  const promises = names?.map((name) => axios.get<PokemonInfo>(`${client}/pokemon/${name}`));

  return Promise.all(promises || []).then((res) => res);
};

export const useFetchPokemons = () =>
  useQuery<PokemonsList, Error>('getPokemons', getPokemons);

export const useFetchPokemon = (name: string) =>
  useQuery<PokemonInfo, Error>(['pokemon', name], () => getPokemon(name));

export const useFetchPokemonsByNames = (names: string[]) =>
  useQuery(['pokemon', names], () => getPokemonByNames(names));
