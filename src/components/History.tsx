import { Component, For } from 'solid-js';
import { useHistory } from '../HistoryProvider';

export const History: Component = () => {
  const [history, { selectPokemon }] = useHistory()!;

  return (
    <div>
      <h2>History</h2>
      <For each={history.slice(1)}>
        {(pokemon) => (
          <div
            onClick={() => {
              selectPokemon(pokemon.id);
            }}
          >
            {pokemon.name}
          </div>
        )}
      </For>
    </div>
  );
};
