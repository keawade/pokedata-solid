import { matchups } from './data/matchups';
import { PokemonType } from './interfaces/PokemonType';

export const calculateMatchup = (
  givenTypes: [PokemonType] | [PokemonType, PokemonType]
) => {
  return (Object.keys(matchups) as PokemonType[]).reduce<
    Record<PokemonType, number>
  >((accumulator, type) => {
    accumulator[type] = givenTypes.reduce(
      (total, givenType) => total * matchups[type][givenType],
      1
    );
    return accumulator;
  }, {} as Record<PokemonType, number>);
};
