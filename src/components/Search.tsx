import { Component, For } from 'solid-js';
import { default as pokemon } from '../data/pokemon.json';
import { useHistory } from '../HistoryProvider';

export const Search: Component = () => {
  const [history, { selectPokemon }] = useHistory()!;
  return (
    <div>
      <select
        onChange={(e) => {
          e.preventDefault();
          if (e.currentTarget.value) {
            selectPokemon(e.currentTarget.value);
          }
        }}
      >
        <option value="">Select a Pokemon!</option>
        <For each={pokemon}>
          {(item) => <option value={item.id}>{item.name}</option>}
        </For>
      </select>
    </div>
  );
};
