import { Component } from 'solid-js';
import { default as pokemon } from '../data/pokemon.json';
import { useHistory } from '../HistoryProvider';
import { createOptions } from '@thisbeyond/solid-select';
import { Select } from './Select';
import { Pokemon } from '../interfaces/Pokemon';

export const Search: Component = () => {
  const [_history, { selectPokemon }] = useHistory()!;
  const props = createOptions(pokemon, { key: 'name' });
  return (
    <Select
      placeholder="Select a Pokemon!"
      {...props}
      onChange={(item: Pokemon) => {
        selectPokemon(item.id);
      }}
    />
  );
};
