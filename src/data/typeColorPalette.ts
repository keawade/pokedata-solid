import { PokemonType } from '../interfaces/PokemonType';

export const typeColorPalette: Record<
  PokemonType,
  { primary: `#${string}`; secondary: `#${string}` }
> = {
  normal: {
    primary: '#A8A878',
    secondary: '#6D6D4E',
  },
  fire: {
    primary: '#F08030',
    secondary: '#9C531F',
  },
  water: {
    primary: '#6890F0',
    secondary: '#445E9C',
  },
  electric: {
    primary: '#F8D030',
    secondary: '#A1871F',
  },
  grass: {
    primary: '#78C850',
    secondary: '#4E8234',
  },
  ice: {
    primary: '#98D8D8',
    secondary: '#638D8D',
  },
  ground: {
    primary: '#E0C068',
    secondary: '#927D44',
  },
  flying: {
    primary: '#A890F0',
    secondary: '#6D5E9C',
  },
  ghost: {
    primary: '#705898',
    secondary: '#493963',
  },
  rock: {
    primary: '#B8A038',
    secondary: '#786824',
  },
  fighting: {
    primary: '#C03028',
    secondary: '#7D1F1A',
  },
  poison: {
    primary: '#A040A0',
    secondary: '#682A68',
  },
  psychic: {
    primary: '#F85888',
    secondary: '#A13959',
  },
  bug: {
    primary: '#A8B820',
    secondary: '#6D7815',
  },
  dark: {
    primary: '#705848',
    secondary: '#49392F',
  },
  steel: {
    primary: '#B8B8D0',
    secondary: '#787887',
  },
  dragon: {
    primary: '#7038F8',
    secondary: '#4924A1',
  },
  fairy: {
    primary: '#EE99AC',
    secondary: '#F4BDC9',
  },
};
