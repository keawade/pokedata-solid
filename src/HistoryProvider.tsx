import { createContext, useContext, JSXElement } from 'solid-js';
import { default as allPokemon } from './data/pokemon.json';
import { Pokemon } from './interfaces/Pokemon';
import { createStore } from 'solid-js/store';

const makeHistoryContext = (initialPokemon = allPokemon[0]) => {
  const [history, setHistory] = createStore([initialPokemon]);
  return [
    history,
    {
      selectPokemon: (id: string) => {
        setHistory((previousHistory) => [
          allPokemon.find((pokemon) => pokemon.id === id)!,
          ...previousHistory,
        ]);
      },
    },
  ] as const;
};

type HistoryContextType = ReturnType<typeof makeHistoryContext>;

const HistoryContext = createContext<HistoryContextType>();

export function HistoryProvider(props: {
  starter?: Pokemon;
  children: JSXElement;
}) {
  const history = makeHistoryContext();

  return (
    <HistoryContext.Provider value={history}>
      {props.children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  return useContext(HistoryContext);
}
