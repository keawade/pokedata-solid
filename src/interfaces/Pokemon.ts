import { PokemonType } from './PokemonType';

export type Pokemon = {
  id: string;
  name: string;
  types: [PokemonType] | [PokemonType, PokemonType];
};
