import { createContext, useContext, JSXElement, createSignal } from 'solid-js';
import { default as allPokemon } from './data/pokemon.json';
import { Pokemon } from './interfaces/Pokemon';
import { createStore } from 'solid-js/store';

const makeHistoryContext = (
  initialPokemon = allPokemon[Math.ceil(Math.random() * 151)] as Pokemon
) => {
  const [history, setHistory] = createSignal([initialPokemon]);
  return [
    history,
    {
      selectPokemon: (id: string) => {
        setHistory((previousHistory) => [
          (allPokemon as Pokemon[]).find((pokemon) => pokemon.id === id)!,
          ...previousHistory.filter((prevPoke) => prevPoke.id !== id),
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
