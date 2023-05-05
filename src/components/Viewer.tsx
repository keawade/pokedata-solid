import { Component, For } from 'solid-js';
import { useHistory } from '../HistoryProvider';

export const Viewer: Component = () => {
  const [history] = useHistory()!;

  return (
    <div>
      <h1>{history[0].name}</h1>
      <img
        src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${history[0].id}.png`}
        alt={`Image of the Pokemon ${history[0].name}.`}
        elementtiming="pokemon"
        fetchpriority="high"
      ></img>
      <div>
        <For each={history[0].types}>{(type) => <div>{type}</div>}</For>
      </div>
    </div>
  );
};
